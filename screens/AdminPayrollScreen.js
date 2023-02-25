import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const UserAttendanceScreen = () => {
  const [attendanceData, setAttendanceData] = useState({ absentDays: 0, workDays: 0, absentDates: [] });
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMonthPress = (month) => {
    setSelectedMonth(month);
    setModalVisible(true);

    // Sample attendance data for the selected month
    const attendance = month === 'January' ? { absentDays: 3, workDays: 17, absentDates: ['2022-01-05', '2022-01-10', '2022-01-27'] } : 
                                              { absentDays: 2, workDays: 18, absentDates: ['2022-02-08', '2022-02-22'] };
    setAttendanceData(attendance);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedMonth(null);
    setAttendanceData({ absentDays: 0, workDays: 0, absentDates: [] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Attendance Details</Text>
      <View style={styles.monthsContainer}>
        <TouchableOpacity onPress={() => handleMonthPress('January')}>
          <Text style={styles.monthButton}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMonthPress('February')}>
          <Text style={styles.monthButton}>February</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} onRequestClose={closeModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedMonth}</Text>
          <View style={styles.attendanceContainer}>
            <TouchableOpacity onPress={() => handleAbsentDaysPress()}>
              <Text style={styles.attendanceLabel}>Absent Days:</Text>
              <Text style={styles.attendanceValue}>{attendanceData.absentDays}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.attendanceContainer}>
            <Text style={styles.attendanceLabel}>Work Days:</Text>
            <Text style={styles.attendanceValue}>{attendanceData.workDays}</Text>
          </View>
          <View style={styles.absentDatesContainer}>
            {attendanceData.absentDates.map((date) => (
              <Text key={date} style={styles.absentDate}>
                {date}
              </Text>
            ))}
          </View>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  monthsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  monthButton: {
    backgroundColor: 'blue',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  absentDate: {
    fontSize: 14,
    marginBottom: 5,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default UserAttendanceScreen;
