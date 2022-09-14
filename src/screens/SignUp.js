import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#1B2430" }}>
            <View style={{ backgroundColor: "#F0EBE3", borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 20 }}>
                <View style={{}}>
                    <View style={{ marginBottom: "6%" }}>
                        <Text style={{ marginBottom: "2%", fontSize: 16, fontWeight: "bold", color: "#1B2430" }}>UserName</Text>
                        <TextInput
                            placeholder='enter your username'
                            keyboardType="default"
                            style={{ borderWidth: 2, borderRadius: 10, paddingHorizontal: 15, fontSize: 15, color: "#1B2430" }}
                            onChangeText={(val) => { console.log("username/email: ", val); }} />
                    </View>
                    <View style={{ marginBottom: "6%" }}>
                        <Text style={{ marginBottom: "2%", fontSize: 16, fontWeight: "bold", color: "#1B2430" }}>Email</Text>
                        <TextInput
                            placeholder='enter your email id'
                            keyboardType="email-address"
                            style={{ borderWidth: 2, borderRadius: 10, paddingHorizontal: 15, fontSize: 15, color: "#1B2430" }}
                            onChangeText={(val) => { console.log("username/email: ", val); }} />
                    </View>
                    <View style={{ marginBottom: "6%" }}>
                        <Text style={{ marginBottom: "2%", fontSize: 16, fontWeight: "bold", color: "#1B2430" }}>Password</Text>
                        <TextInput
                            placeholder='enter your password'
                            keyboardType="visible-password"
                            style={{ borderWidth: 2, borderRadius: 10, paddingHorizontal: 15, fontSize: 15, color: "#1B2430" }}
                            onChangeText={(val) => { console.log("username/email: ", val); }} />
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ backgroundColor: "#1B2430", width: "40%", justifyContent: "center", alignItems: "center", paddingVertical: 10, borderRadius: 10 }}
                        onPress={() => { navigation.navigate("login") }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#F0EBE3" }}>SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { navigation.navigate("login") }}>
                        <Text style={{ color: "#1B2430" }}>Alreday have an account? <Text style={{ color: "#1B2430", fontWeight: "bold" }}>Log in</Text></Text>
                    </TouchableOpacity>
                </View>
            </View >
        </View >
    )
}

export default SignUp

const styles = StyleSheet.create({})