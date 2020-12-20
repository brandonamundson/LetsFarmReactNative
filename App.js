import React from "react";
import {
	Text,
	View,
	Pressable,
	TextInput,
	ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { plant, wait, water } from "./garden.js";
import { styles } from "./styles.js";

const Stack = createStackNavigator();
var name = null;
var bg = require("./assets/images/sunrise.png");

function nameInput({ navigation }) {
	bg = require("./assets/images/sunrise.png");
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.background} source={bg}>
				<Text style={styles.text}>Please enter your name:</Text>
				<TextInput
					style={styles.inputTxt}
					placeholder="Enter name here"
					onChangeText={(text) => (name = text)}
					multiline={false}
				/>
				<Pressable
					style={styles.buttonBox}
					onPress={() => {
						name != null
							? navigation.navigate(
									"Garden",
									require("./assets/images/garden.jpg")
							  )
							: alert("Please enter name");
					}}
				>
					<Text style={styles.buttonTxt}>Enter</Text>
				</Pressable>
			</ImageBackground>
		</View>
	);
}

function garden({ navigation, route }) {
	if (route.params == require) bg = route.params;
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.background} source={bg}>
				<Text style={styles.text}>What do you wish to do?</Text>
				<Pressable
					onPress={() => {
						navigation.navigate("Garden", plant());
					}}
					style={styles.buttonBox}
				>
					<Text style={styles.buttonTxt}>Plant</Text>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.navigate("Garden", water());
					}}
					style={styles.buttonBox}
				>
					<Text style={styles.buttonTxt}>Water</Text>
				</Pressable>
				<Pressable
					onPress={() => navigation.navigate("Wait")}
					style={styles.buttonBox}
				>
					<Text style={styles.buttonTxt}>Wait</Text>
				</Pressable>
			</ImageBackground>
		</View>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Name Input">
					<Stack.Screen
						name="Name Input"
						component={nameInput}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Garden"
						component={garden}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Wait"
						component={wait}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}
