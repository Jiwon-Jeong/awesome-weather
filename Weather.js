import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#5614B0", "#DBD65C"],
    title: "⚡️? ⚡️⚡️⚡️?",
    subtitle: "Thor is coming⚡️🔨"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#67B26F", "#4ca2cd"],
    title: "Drizzle",
    subtitle: "🐸🧚🐸🧚🐸🧚🐸"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Heavy Rain",
    subtitle: "Singin' in the Rain 💃🕺 "
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#808080", "#3fada8"],
    title: "Elsa..?",
    subtitle: "Do you wanna build a snowman?⛄️"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ee0979", "#ff6a00"],
    title: "Awesome!!!!!",
    subtitle: "let's go out and play🤸‍♀️"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#616161", "#9bc5c3"],
    title: "Cloudy",
    subtitle: "🌬💨☁️☁️☁️"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#FFA17F", "#00223E"],
    title: "Haze",
    subtitle: "I..I can't see anything.."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#1D2B64", "#F8CDDA"],
    title: "Mist",
    subtitle: "Take care not to catch a cold!"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#6441A5", "#2a0845"],
    title: "Hell yeah",
    subtitle: "Just stay home."
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#2C3E50", "#FD746C"],
    title: "Foggy",
    subtitle: "Into the unknown"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={90}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Tornado",
    "Fog"
  ])
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 40,
    color: "white"
  },
  title: {
    fontWeight: "300",
    fontSize: 45,
    color: "white",
    marginBottom: 30,
    paddingLeft: 0
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "400",
    color: "white"
  }
});
