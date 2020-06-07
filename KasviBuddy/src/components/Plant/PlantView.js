import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"


const PlantView = props => {
  const { plant } = props

  return (
    <View>
      <View>
        <Text>{plant.commonName}</Text>
        <Text>{plant.scientificName}</Text>
        <Text>Watering: {plant.guide.watering}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => props.setSelectedPlant()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default PlantView