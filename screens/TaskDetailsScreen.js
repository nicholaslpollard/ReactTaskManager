import React from "react";
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
} from "react-native";

// Screen for showing more information about one task
export default function TaskDetailsScreen({ route, tasks, onComplete }) {
    const { taskId } = route.params;

    const task = tasks.find((item) => item.id === taskId);

    if (!task) {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>Task not found.</Text>
        </View>
        );
    }

    return (
    <View style={styles.container}>
        <Image source={task.image} style={styles.image} />

        <View style={styles.card}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text style={styles.details}>{task.details}</Text>

        <Text
            style={[
            styles.status,
            task.completed ? styles.completedText : styles.pendingText,
            ]}
        >
            Status: {task.completed ? "Completed" : "Pending"}
        </Text>

        <Pressable
            style={[
            styles.button,
            task.completed ? styles.completedButton : styles.activeButton,
            ]}
            onPress={() => {
            console.log("Completed from details screen:", task.title);
            onComplete(task.id);
            }}
        >
            <Text style={styles.buttonText}>
                {task.completed ? "Completed" : "Mark Complete"}
            </Text>
            </Pressable>
        </View>
        </View>
    );
}

// Styles for details screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        padding: 16,
    },
    image: {
        width: "100%",
        height: 220,
        borderRadius: 14,
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 16,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10,
        color: "#222",
    },
    description: {
        fontSize: 16,
        color: "#444",
        marginBottom: 10,
    },
    details: {
        fontSize: 15,
        color: "#555",
        marginBottom: 16,
        lineHeight: 22,
    },
    status: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 14,
    },
    completedText: {
        color: "green",
    },
    pendingText: {
        color: "#cc8400",
    },
    button: {
        paddingVertical: 12,
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
        fontSize: 16,
        fontWeight: "600",
    },
    errorText: {
        fontSize: 18,
        color: "red",
    },
});