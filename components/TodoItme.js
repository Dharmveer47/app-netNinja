import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
const TodoItme = ({ item, pressHendler }) => {
  return (
    <TouchableOpacity onPress={() => pressHendler(item.key)} style={styles.item}>
    <AntDesign name="delete" size={24} color="black" />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItme;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: "row",
    },
    text: {
      marginHorizontal: 10,
    },
});

