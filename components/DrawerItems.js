import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DrawerItem = ({ label, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <Ionicons name={iconName} size={20} color="#71839B" />
    <Text style={styles.drawerItemText}>{label}</Text>
  </TouchableOpacity>
);

const DrawerItems = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <DrawerItem
        label="Home"
        iconName="ios-home"
        onPress={() => navigation.navigate("Home")}
      />
      <DrawerItem
        label="Dashboard"
        iconName="bar-chart"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="Staff"
        iconName="people"
        onPress={() => navigation.navigate("StaffDashboard")}
      />
      <DrawerItem
        label="Time Management"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 20,
    flex: 1,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
  },
  drawerItemText: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
    color: "#324054",
    display: "flex",
    alignItems: "flex-end",
  },
});

export default DrawerItems;
