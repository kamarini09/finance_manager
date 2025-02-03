import { View, Text, TextInput, StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import { TodoEntity } from "./TodoEntity";

export default function Todo() {
  const [todos, setTodos] = React.useState([] as TodoEntity[]);
  const [todo, setTodo] = React.useState("");
  const onAddTodo = () => {
    const newTodo = new TodoEntity(todos.length, todo);
    setTodos([...todos, newTodo]);
    console.log(todos);
  };
  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View>
      <Text>Todo</Text>
      <TextInput style={styles.input} onChangeText={setTodo} value={todo} placeholder="useless placeholder" />

      <Button onPress={onAddTodo} title="Add todo" color="#841584" accessibilityLabel="Add todo" />
      <FlatList data={todos} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
