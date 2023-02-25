import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ScheduleScreen = ({ navigation }) => {
  const [schedule, setSchedule] = useState([
    {
      id: '1',
      date: new Date('2023-02-23T14:00:00Z'),
      title: 'Monday',
      time: '07:00-16:00',
    },
    {
      id: '2',
      date: new Date('2023-02-24T17:00:00Z'),
      title: 'Tuesday',
      time: '09:00-18:00',
    },
    {
      id: '3',
      date: new Date('2023-02-24T17:00:00Z'),
      title: 'Wednesday',
      time: '07:00-16:00',
    },
    {
      id: '4',
      date: new Date('2023-02-24T17:00:00Z'),
      title: 'Thursday',
      time: '07:00-16:00',
    },
    {
      id: '5',
      date: new Date('2023-02-24T17:00:00Z'),
      title: 'Friday',
      time: '07:00-16:00',
    },
    {
      id: '6',
      date: new Date('2023-02-24T17:00:00Z'),
      title: 'Saturday',
      time: 'OFF',
    },
    {
      id: '7',
      date: new Date('2023-02-24T17:00:00Z'),
      title: 'Sunday',
      time: 'OFF',
    },
    // add more items here
  ]);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const today = new Date();
  const nextWeek = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    nextWeek.push(formatDate(date));
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginBottom: 10 }]}>Schedule for next week:</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{formatDate(item.date)}</Text>
            <Text style={styles.itemSubtitle}>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    item: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1A1A1A',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 2,
      marginBottom: 100,
    },
    date: {
      fontSize: 14,
      color: '#666666',
    },
    time: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#1A1A1A',
    },
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#007AFF',
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 5,
      elevation: 5,
    },
    floatingButtonIcon: {
      color: '#FFFFFF',
      fontSize: 50,
    },
  });
  
  export default ScheduleScreen;
