import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CurrentForcast from "./CurrentForcast";

const MainScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Tbilisi", value: "tbilisi", lat: "41.715137", lon: "44.827095" },
    { label: "Kutaisi", value: "kutaisi", lat: "42.843479", lon: "42.667230" },
    { label: "Batumi", value: "batumi", lat: "41.616802", lon: "41.636779" },
  ]);

  const city = items.filter((item) => item.value === value);

  const nav = useNavigation();

  const onCityPress = (city) => {
    nav.navigate("cityDetail", { city });
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
      />
      <CurrentForcast city={city[0]} onPress={onCityPress} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F4690",
    alignItems: "center",
    paddingVertical: 100,
  },
  dropdown: {
    width: "65%",
    alignSelf: "center",
  },
  dropdownContainer: {
    width: "70%",
  },
});
