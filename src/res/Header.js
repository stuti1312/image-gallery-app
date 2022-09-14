import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
    return (
        <View>
            {/* <TouchableOpacity style={{}} onPress={onBack}>
                <Text>back</Text>
            </TouchableOpacity> */}
            <Text>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})