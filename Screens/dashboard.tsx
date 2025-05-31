import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard: React.FC = () => {


  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Hello bhai welcome to the Dashboard
        </Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  
});
