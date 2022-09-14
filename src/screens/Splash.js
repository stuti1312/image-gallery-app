import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => { navigation.replace("auth") }, 1000)
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>SNAPPY</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "gray", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" },
  subContainer: { borderWidth: 10, borderColor: "#ffffff", padding: 20 },
  text: { color: "#ffffff", fontSize: 50, fontWeight: "bold" }
})