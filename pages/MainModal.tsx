import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have Ionicons installed
import CustomSignUpButton from '../components/CustomSignUpButton';

const ModalScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={()=>navigation.navigate('signUp')}>
        <Text style={styles.dropdownText}>Go Back</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.icons}>
               <Ionicons name="snow-outline" size={20} color="black" style={styles.snowIcon} />
               <View style={styles.iconRing}>
                 <Ionicons name="close-outline" size={30} color="black"  onPress={toggleModal}/>
               </View>
            </View>
            <Text style={styles.modalText}>Welcome to Soo</Text>
            <Text style={styles.modalText2}>Great to have you with us!</Text>
            <View>
              <CustomSignUpButton title="Got it" onPress={toggleModal} /> 
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modal:{
    height:600,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 18,
    marginRight: 10,
  },
  iconRing: {
    borderWidth: 1,
    borderColor:'#D0D5DD',
    borderRadius: 100,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  icons:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:40
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: '92%',
    height:350
  },
  modalText: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight:'bold',
    fontFamily:'main'
  },
  modalText2: {
    fontSize: 13,
    marginBottom: 20,
    fontFamily:'main'
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#253BFF',
    borderRadius: 50,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'main'
  },
  snowIcon:{
   padding:20,
    borderRadius:50,
    backgroundColor:'#253BFF',
    color:'white'
  }
});

export default ModalScreen;
