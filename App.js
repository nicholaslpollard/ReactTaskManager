import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TaskListScreen from "./screens/TaskListScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";

// Creates stack navigator for moving between screens
const Stack = createNativeStackNavigator();

export default function App() {
	const [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Study",
			description: "Review components, props, state, and styling.",
			details: "Spend time practicing React Native basics.",
			image: require("./assets/study.jpg"),
			completed: false,
		},
		{
			id: "2",
			title: "Homework",
			description: "Complete the weekly mobile app assignment.",
			details: "Work through the instructions and create the app.",
			image: require("./assets/homework.jpg"),
			completed: false,
		},
		{
			id: "3",
			title: "Shopping",
			description: "Pick up food and drinks for the week.",
			details: "Buy groceries for meals, snacks, and drinks.",
			image: require("./assets/shopping.jpg"),
			completed: false,
		},
		{
			id: "4",
			title: "Clean",
			description: "Organize the desk and remove clutter.",
			details: "Clean room and organize desk space",
			image: require("./assets/clean.jpg"),
			completed: false,
		},
	]);

	// Mark a task as completed when button pressed
	const markTaskCompleted = (taskId) => {
		console.log("Marking task as completed:", taskId);

		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: true } : task
			)
		);
	};
  //Draggin
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="TaskList"
						options={{ title: "React Task Manager" }}
					>
						{({ navigation }) => (
							<TaskListScreen
								navigation={navigation}
								tasks={tasks}
								setTasks={setTasks}
								onComplete={markTaskCompleted}
							/>
						)}
					</Stack.Screen>

					<Stack.Screen
						name="TaskDetails"
						options={{ title: "Task Details" }}
					>
						{({ route, navigation }) => (
							<TaskDetailsScreen
								route={route}
								navigation={navigation}
								tasks={tasks}
								onComplete={markTaskCompleted}
							/>
						)}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}