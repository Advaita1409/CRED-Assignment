import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
return (
    <View style={styles.container}> 
    <Text style={styles.title}>Stack View Demo</Text>
    <View style={styles.row}>
        <Text style={styles.item}>Item 1</Text>
        <Text style={styles.item}>Item 2</Text>
    </View>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
row: {
    flexDirection: 'row', 
    marginBottom: 10,
},
item: {
    padding: 10,
    backgroundColor: 'lightgray',
    margin: 5,
},
});

export default App;