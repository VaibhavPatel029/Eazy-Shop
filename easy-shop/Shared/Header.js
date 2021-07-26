import React from "react"
import { StyleSheet, Image, SafeAreaView, Platform } from "react-native"

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 50 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        // padding: 30,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    }
})

export default Header;