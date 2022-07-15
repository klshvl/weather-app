import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const WeeklyForecast = () => {
  const [sevenDayForecast, setSevenDaysForecast] = useState([]);
  const { params } = useRoute();

  const city = params?.city;

  return (
    <View style={styles.container}>
      <Text>{city?.label}</Text>
    </View>
  );
};

export default WeeklyForecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
