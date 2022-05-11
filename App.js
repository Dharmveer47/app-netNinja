import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItme from "./components/TodoItme";
import AddTodo from "./components/AddTodo";
const initial = [
  { text: "buy coffee", key: "1" },
  { text: "create an app", key: "2" },
  { text: "Play on swithc", key: "3" },
];
export default function App() {
  const [todo, setTodo] = useState(initial);

  const pressHendler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    });
  }

  const sumbitHander = ( text ) =>{
    setTodo((prevTodo) => {
      return [
        {text: text, key: Date.now()},
        ...prevTodo
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo sumbitHander={sumbitHander} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => 
              <TodoItme item={item} pressHendler={pressHendler} />
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
