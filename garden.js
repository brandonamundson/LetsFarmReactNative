import React from "react";
import {
	Text,
	View,
	Pressable,
	TextInput,
	ImageBackground,
} from "react-native";
import { styles } from "./styles.js";

var countPlants = 0;
var countWaters = 0;

export function wait({ navigation }) {
	var choice = 0;
	bg = require("./assets/images/hourglass.jpg");
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.background} source={bg}>
				<Text style={styles.text}>
					Please input a number between 1 and 10
				</Text>
				<TextInput
					style={styles.inputTxt}
					placeholder="0"
					onChangeText={(text) => (choice = text)}
					multiline={false}
				/>
				<Pressable
					onPress={() =>
						choice <= 10 && choice >= 1
							? navigation.navigate("Garden", waitOutput(choice))
							: alert("Please pick a number between 1 and 10.")
					}
					style={styles.buttonBox}
				>
					<Text style={styles.buttonTxt}>Enter</Text>
				</Pressable>
			</ImageBackground>
		</View>
	);
}

function waitOutput(choice) {
	if (countPlants > 0 && countWaters > 0) {
		alert(
			"You watch for " + choice + " month(s) as your plants grow bigger."
		);
	} else if (countPlants > 0 && countWaters == 0) {
		alert(
			"You stare at the seeds you planted as if you hope they will magically grow without water."
		);
	} else if (countWaters > 0 && countPlants == 0) {
		alert("You wait " + choice + " hour(s) while the mud dries.");
		countWaters--;
	} else {
		alert(
			"You haven't planted anything.  You continue to look at your barren plot of land."
		);
	}
	bg = require("./assets/images/hourglass.jpg");
}

export function water() {
	if (countPlants > 0) {
		alert(
			"You water your garden. Slowly," +
				" you watch as your plants start to sprout"
		);
	} else {
		alert(
			"Congratulations, you just made some mud." +
				"  Try to plant seeds first."
		);
		alert("Have fun doing that with the muddy mess you created.");
	}
	bg = require("./assets/images/watercan.jpg");
	countWaters++;
}

export function plant() {
	countPlants++;
	alert(
		"You plant some seeds.  " +
			"These will need some water if it is ever going to grow."
	);
	bg = require("./assets/images/planting.jpg");
}
