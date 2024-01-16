import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

/**
 * 
 * @param {{onAddTask: () => void}} props 
 * @returns 
 */
const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        onAddTask(task);
        setTask('');
    };
    console.log(crypto.randomUUID())
    return (
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={task}
                onChangeText={(text) => setTask(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddTask;