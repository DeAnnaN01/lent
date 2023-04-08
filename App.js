import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RecordsList} from './records/RecordsList';


export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleName} > Lent Who? </Text>
                <RecordsList />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleName: {
        fontSize: 40,
        textAlign: 'top',
        margin: 10,
        color: '#2399aa',
        flex: 1
    },
});
