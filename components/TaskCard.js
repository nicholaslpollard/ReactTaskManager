import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

// Reusable card component for each task
export default function TaskCard({ task, onPress, onComplete }) {
  if (!task) {
    return null;
  }

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={task.image} style={styles.image} />

      <View style={styles.textSection}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>

        <Text
          style={[
            styles.status,
            task.completed ? styles.completedText : styles.pendingText,
          ]}
        >
          {task.completed ? "Completed" : "Pending"}
        </Text>

        <Pressable
          style={[
            styles.button,
            task.completed ? styles.completedButton : styles.activeButton,
          ]}
          onPress={() => onComplete(task.id)}
        >
          <Text style={styles.buttonText}>
            {task.completed ? "Completed" : "Mark Complete"}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

// Styles for task cards
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
  },
  textSection: {
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
    color: "#222",
  },
  description: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
  },
  completedText: {
    color: "green",
  },
  pendingText: {
    color: "#cc8400",
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#2f6fed",
  },
  completedButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});