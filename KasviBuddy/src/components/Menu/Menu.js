import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { MenuOption } from "./MenuOption";
import PlantView from "../Plant/PlantView";

export const Menu = (props) => {
  const { plants } = props;

  const [selectedPlant, setSelectedPlant] = useState(undefined)

  function setPlant(plant) {
    setSelectedPlant(plant)
  }

  function setPlantUndefined() {
    setSelectedPlant(undefined)
  }

  const headerText = selectedPlant ? selectedPlant.nickName : "Plants";
  return (
    <View style={styles.menuContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      {selectedPlant === undefined ? plants
        && plants.map((plant) => (
          <MenuOption
            plant={plant}
            setSelectedPlant={setPlant}
            selectedPlant={selectedPlant}
            key={plant.id}
          />)) :
        <PlantView setSelectedPlant={setPlantUndefined} plant={selectedPlant} />}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "column",
  },
  headerContainer: {
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
});
