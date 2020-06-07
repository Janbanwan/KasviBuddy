import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

export const MenuOption = props => {
  const { plant } = props;
  return (
    <View style={styles.plantContainer} key={plant.id}>
      {props.plant && (
        <TouchableOpacity onPress={() => {
          console.log("Vittu")
          props.setSelectedPlant(plant)
        }} key={plant.id}>
          <View style={styles.nickContainer}>
            <Text>{plant.nickName}</Text>
          </View>
          <View style={styles.nickContainer}>
            <Text style={styles.scientificName}>{plant.scientificName}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  plantContainer: {
    height: 75,
    borderWidth: 2,
    marginVertical: 2,
    marginHorizontal: 3,
    borderColor: 'limegreen',
  },

  nickContainer: {
    paddingTop: 3,
    paddingLeft: 5,
  },

  scientificName: {
    fontStyle: 'italic',
  },
});
