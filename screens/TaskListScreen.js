import React from "react";
import { View, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

// Main screen showing list of tasks
export default function TaskListScreen({ navigation, tasks, setTasks, onComplete }) {
	return (
		<View style={styles.container}>
			<Header title="My Tasks" />

			<DraggableFlatList
				data={tasks}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				onDragEnd={({ data }) => {
					console.log("New task order:", data.map((task) => task.title));
					setTasks(data);
				}}
				renderItem={({ item, drag, isActive }) => (
					<TaskCard
						task={item}
						onPress={() => {
							console.log("Task pressed:", item.title);
							navigation.navigate("TaskDetails", { taskId: item.id });
						}}
						onComplete={onComplete}
						onLongPress={drag}
						isActive={isActive}
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