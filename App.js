import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
const initial = [
  { text: "buy coffee", key: "1" },
  { text: "create an app", key: "2" },
  { text: "Play on swithc", key: "3" },
];
export default function App() {
  const [todo, setTodo] = useState(initial);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*  To form */}
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => <Text>{item.text}</Text>}
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
