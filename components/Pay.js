import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminPayrollScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Payroll Details</Text>
      {/* Add components for displaying employee payroll information */}
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
});

export default AdminPayrollScreen;
