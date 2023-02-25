import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Manager = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('button1');
  const navigation = useNavigation();

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    setMenuOpen(false);

    if (buttonName === 'button1') {
        navigation.navigate('news');
      } else if (buttonName === 'button2') {
        navigation.navigate('Stillempty');
      } else if (buttonName === 'button4') {
        navigation.navigate('Stillempty');
      }else if (buttonName === 'button5') {
        navigation.navigate('Stillempty');
      }else if (buttonName === 'button6') {
        navigation.navigate('Stillempty');
      }else if (buttonName === 'button7') {
        navigation.navigate('Stillempty');
      }
  }

  return (
    <View style={styles.container}>
      {/* Hamburger icon to toggle the menu */}
      <TouchableOpacity
        style={styles.hamburger}
        onPress={() => setMenuOpen(!menuOpen)}
        activeOpacity={0.7}>
        <Ionicons name="menu" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Side menu */}
      <View style={[styles.sideMenu, menuOpen ? styles.sideMenuOpen : styles.sideMenuClosed]}>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button1' && styles.activeButton]}
          onPress={() => handleButtonPress('button1')}>
          <Ionicons name="home" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button2' && styles.activeButton]}
          onPress={() => handleButtonPress('button2')}>
          <Ionicons name="bar-chart-outline" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>Staffing Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button3' && styles.activeButton]}
          onPress={() => handleButtonPress('button3')}>
          <Ionicons name="bar-chart-outline" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>Absence Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button4' && styles.activeButton]}
          onPress={() => handleButtonPress('button4')}>
          <Ionicons name="time-outline" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>Working Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button5' && styles.activeButton]}
          onPress={() => handleButtonPress('button5')}>
          <Ionicons name="rocket-outline" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>Quality Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button6' && styles.activeButton]}
          onPress={() => handleButtonPress('button6')}>
          <Ionicons name="people-outline" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>My Team</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button7' && styles.activeButton]}
          onPress={() => handleButtonPress('button7')}>
          <Ionicons name="calendar-outline" size={24} color="#003366" />
          <Text style={styles.menuButtonText}>Schedule Interchange</Text>
        </TouchableOpacity>
      </View>

      {/* Content area */}
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to the Manager screen</Text>
        <Text style={styles.subheading}>Select a button from the side menu to navigate.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  hamburger: {
    backgroundColor: '#292929',
    padding: 10,
    
  },
  hamburgerText: {
    color: '#fff',
    fontSize: 20,
  },
  sideMenu: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: 0,
    overflow: 'hidden',
    transitionDuration: '0.5s',
    marginBottom: 10,
    marginTop: 70,
  },
  sideMenuOpen: {
    width: 200,
  },
  sideMenuClosed: {
    width: 10,
  },
  menuButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  menuButtonText: {
    color: '#003366',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 4,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff'
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#c9c9c9'
  },
});
export default Manager;
