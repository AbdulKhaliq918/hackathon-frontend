import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React from 'react'

export default function Lists() {

    const items = [
        { id: '0', text: 'View' },
        { id: '1', text: 'Text' },
        { id: '2', text: 'Image' },
        { id: '3', text: 'ScrollView' },
        { id: '4', text: 'ListView' },
    ]

    return (
        <View>
            <FlatList
                style={styles.container}
                data={items}
                renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button title='Clike me'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
})