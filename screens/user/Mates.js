import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TeamScreen = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: '1', name: 'sami dridi', position: 'WFM', email: 'hamza.doe@example.com' },
    { id: '2', name: 'eya ben abdelkader', position: 'WFM', email: 'Eya.smith@example.com' },
    { id: '3', name: 'wassim fitouri ', position: 'WFM', email: 'wassim.johnson@example.com' },
    { id: '4', name: 'ghargharino', position: 'WFM', email: 'ghargharino.lee@example.com' },
  ]);

  const manager = { name: 'Mohamed Mokhtar Mejri', position: 'Production Manager', email: 'Mohamedmokhtarmejri@CNX.com' };

  const renderTeamMember = ({ item }) => (
    <View style={styles.teamMemberContainer}>
      <View style={styles.teamMemberInfo}>
        <Text style={styles.teamMemberName}>{item.name}</Text>
        <Text style={styles.teamMemberPosition}>{item.position}</Text>
      </View>
      <TouchableOpacity style={styles.messageIconContainer} onPress={() => handleSendMessage(item.email)}>
        <Ionicons name="ios-mail-outline" size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  const handleSendMessage = (email) => {
    // TODO: Implement functionality to send a message to the selected team member
    console.log(`Sending message to ${email}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.managerName}>{manager.name}, {manager.position}</Text>
      <Text style={styles.heading}>Team Members</Text>
      <FlatList
        data={teamMembers}
        renderItem={renderTeamMember}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: '#007AFF',
    },
    flatlistContent: {
      paddingBottom: 20,
    },
    teamMemberContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    teamMemberInfo: {
      flex: 1,
    },
    teamMemberName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    teamMemberPosition: {
      fontSize: 16,
      color: '#666',
    },
    messageIconContainer: {
      marginLeft: 10,
    },
  });
  


export default TeamScreen;
