import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const CustomDropdown = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <DropdownItem
        title="20th Asian Game - Achi Nagoya 2026 (Winter)"
        date="YYYY-MM-DD ~ YYYY-MM-DD"
        location="Pyeongchang, Gangwon-do, Korea"
      />
      <DropdownItem
        title="20th Asian Game - Achi Nagoya 2026 (Winter)"
        date="YYYY-MM-DD ~ YYYY-MM-DD"
        location="Pyeongchang, Gangwon-do, Korea Very Very long city name"
      />
      <DropdownItem
        title="20th Asian Game - Achi Nagoya 2026 (Winter)"
        date="YYYY-MM-DD ~ YYYY-MM-DD"
        location="Pyeongchang, Gangwon-do, Korea"
      />
      <DropdownItem
        title="20th Asian Game - Achi Nagoya 2026 (Winter)"
        date="YYYY-MM-DD ~ YYYY-MM-DD"
        location="Pyeongchang, Gangwon-do, Korea Very Very long city name"
      />
    </ScrollView>
  );
};

const DropdownItem = ({ title, date, location }) => {
  return (
    <View style={styles.dropdownContent}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.dropImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.content}>
          <Text style={styles.dropdownText}>{title}</Text>
          <Text style={styles.midText}>{date}</Text>
          <Text style={styles.lastText}>{location}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContent: {
    position: 'relative',
    width: '100%',
   
    borderRadius: 20,
    backgroundColor:'#253BFF',
    height:160,
    marginTop: 10,
    overflow: 'hidden',
  },
  dropImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
   
  },
  content: {
    padding: 20,
    zIndex:5
  },
  dropdownText: {
    fontFamily: 'main',
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  midText: {
    fontFamily: 'main',
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  lastText: {
    fontFamily: 'main',
    fontSize: 12,
    color: '#fff',
  },
  imageStyle: {
    marginTop: 40, 
    marginLeft: 50,
    opacity:0.3 
  },
});

export default CustomDropdown;
