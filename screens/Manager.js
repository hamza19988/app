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
        navigation.navigate('login');
      } else if (buttonName === 'button3') {
        navigation.navigate('login');
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
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.menuButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button2' && styles.activeButton]}
          onPress={() => handleButtonPress('button2')}>
          <Ionicons name="bar-chart-outline" size={24} color="#fff" />
          <Text style={styles.menuButtonText}>Dashboard Staffing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'Button3' && styles.activeButton]}
          onPress={() => handleButtonPress('Button3')}>
          <Ionicons name="bar-chart-outline" size={24} color="#fff" />
          <Text style={styles.menuButtonText}>Dashboard Absence</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'Button 4' && styles.activeButton]}
          onPress={() => handleButtonPress('Button 4')}>
          <Ionicons name="time-outline" size={24} color="#fff" />
          <Text style={styles.menuButtonText}>Working Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'SI' && styles.activeButton]}
          onPress={() => handleButtonPress('SI')}>
          <Ionicons name="rocket-outline" size={24} color="#fff" />
          <Text style={styles.menuButtonText}>Dashboard Quality </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button 5' && styles.activeButton]}
          onPress={() => handleButtonPress('button 5')}>
          <Ionicons name="people-outline" size={24} color="#fff" />
          <Text style={styles.menuButtonText}>My Team</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, activeButton === 'button 6' && styles.activeButton]}
          onPress={() => handleButtonPress('button 6')}>
          <Ionicons name="calendar-outline" size={24} color="#fff" />
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
  sideMenu: {
    backgroundColor: '#292929',
    paddingVertical: 20,
    paddingHorizontal: 0.5,
    width: 50,
  },
  sideMenuOpen: {
    width: '50%',
  },
  sideMenuClosed: {
    width: 0,
  },
  menuButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#0d6efd',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  activeButton: {
    backgroundColor: '#005ca9',
  },
  menuButtonText: {
    color: '#fff',
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
  },
  subheading: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
});

export default Manager;
