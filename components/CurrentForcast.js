import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../consts";

const axios = require("axios").default;

const defaultCity = {
  label: "Tbilisi",
  value: "tbilisi",
  lat: "41.715137",
  lon: "44.827095",
};

const CurrentForcast = ({ city = defaultCity, onPress = () => {} }) => {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
      )
      .then(function (response) {
        setForecast(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [city]);

  return (
    <TouchableOpacity onPress={() => onPress(city)}>
      {forecast ? (
        <View style={styles.container}>
          <Text style={styles.cityLabel}>{city?.label}</Text>
          <Text style={styles.temperature}>
            {forecast?.main?.temp.toFixed(0)} °C
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CurrentForcast;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8AA42",
  },
  cityLabel: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
  temperature: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 36,
    color: "white",
  },
});
