import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

// Main screen showing list of tasks
export default function TaskListScreen({ navigation, tasks, onComplete }) {
  return (
    <View style={styles.container}>
      <Header title="My Tasks" />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() => {
              console.log("Task pressed:", item.title);
              navigation.navigate("TaskDetails", { taskId: item.id });
            }}
            onComplete={onComplete}
          />
        )}
      />
    </View>
  );
}

// Styles for task list screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
});