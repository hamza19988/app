import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Payroll = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthSelection = (month) => {
    setSelectedMonth(month);
    // You can add any additional logic to handle the selected month here
  };

  const monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weeks = [
    { id: 1, dates: '1-7' },
    { id: 2, dates: '8-14' },
    { id: 3, dates: '15-21' },
    { id: 4, dates: '22-28' },
    { id: 5, dates: '29-31' }, // Adjust for February if needed
  ];

  const handleReturn = () => {
    setSelectedMonth(null);
  };

  if (selectedMonth) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Weeks for {selectedMonth}</Text>
        <View style={styles.weeksTable}>
          {weeks.map((week) => (
            <View key={week.id} style={styles.weekRow}>
              <Text style={styles.weekNumber}>Week {week.id}</Text>
              <Text style={styles.weekDates}>{week.dates}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.returnButton} onPress={handleReturn}>
          <Text style={styles.returnText}>Return to Months</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Month:</Text>
      <View style={styles.menu}>
        {monthOptions.map((month) => (
          <TouchableOpacity
            key={month}
            style={[
              styles.monthOption,
              selectedMonth === month && styles.selectedOption,
            ]}
            onPress={() => handleMonthSelection(month)}
          >
            <Text style={styles.monthText}>{month}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  monthOption: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: 'blue',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  weeksTable: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  weekRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  weekNumber: {
    fontWeight: 'bold',
  },
  weekDates: {},
});

export default Payroll;
