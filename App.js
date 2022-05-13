import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const sumbitHander = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Date.now() }, ...prevTodo];
      });
    } else {
      Alert.alert("Opps !", "Todos must be over 3 chars Long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo sumbitHander={sumbitHander} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItme item={item} pressHendler={pressHendler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
