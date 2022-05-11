import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const TodoItme = ({ item, pressHendler }) => {
  return (
    <TouchableOpacity onPress={() => pressHendler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
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
    }
});

