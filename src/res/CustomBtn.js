import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({ name, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={{ padding: 10 }}>
            <Text style={{ color: "#F0EBE3", fontWeight: "bold", }}>{name}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn

const styles = StyleSheet.create({})