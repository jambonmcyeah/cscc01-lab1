import React, { useState } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import AddTask from "./AddTask";
import { randomUUID } from 'expo-crypto';

const ToDoList = () => {
    const [toDos, setToDos] = useState(
        /**
         * @type {{id: string, title: string}[]}
         */
        ([]))

        /**
         * 
         * @param {string} title 
         * @returns 
         */
    const addToDo = (title) => 
        setToDos([...toDos, { id: randomUUID(), title }])

    /**
     * 
     * @param {string} id 
     * @returns 
     */
    const removeToDo = (id) => 
        setToDos(toDos.filter((todo) => todo.id !== id))

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((todo) => (
                <View key={todo.id} style={styles.todoItem}>
                    <Text>{todo.title}</Text>
                    <Button title="Delete" onPress={() => removeToDo(todo.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;