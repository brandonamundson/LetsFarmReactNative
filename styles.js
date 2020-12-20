import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "100%",
		opacity: 100,
	},
	buttonBox: {
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#999",
		borderStyle: "solid",
		borderWidth: 3,
		marginTop: 35,
		marginBottom: 35,
	},
	buttonTxt: {
		alignSelf: "center",
		fontSize: 35,
		color: "#000",
		zIndex: 0,
	},
	container: {
		flex: 1,
		alignContent: "center",
	},
	inputTxt: {
		fontFamily: "Roboto",
		fontSize: 35,
		color: "#0011FF",
		textAlign: "center",
		fontWeight: "bold",
		borderColor: "#999",
		borderStyle: "solid",
		borderWidth: 3,
	},
	text: {
		fontFamily: "Roboto",
		fontSize: 60,
		color: "#0011FF",
		textAlign: "center",
		fontWeight: "bold",
		paddingTop: 55,
		paddingBottom: 25,
	},
});
