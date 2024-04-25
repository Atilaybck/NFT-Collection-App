import React from "react";
import { SafeAreaView, View, StyleSheet, Image,Text, TouchableOpacity } from "react-native"; 
import COLORS from "../../const/colors";
import { StatusBar } from "expo-status-bar";

const OnBoardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
            <StatusBar style="light" />
            <View style={styles.imageBg}>
            <Image style={{height:250,width:180, marginTop:70}} source={require('../../assets/nft.png')} />

            </View>

            <View 
            style={{
                paddingHorizontal:20, 
                marginTop:50, 
                justifyContent:"space-between"
            }}>
                <Text style={styles.title}>Collection Best</Text>
                <Text style={styles.title}>NFT Crypto Art</Text>
                <TouchableOpacity onPress={()=>navigation.replace("HomeScreen")} activeOpacity={0.7}style={styles.btn}>
                    <Text style ={{color: COLORS.black, fontWeight: "bold"}}>Start</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({ 
    imageBg: {
        height: 320,
        width:220,
        backgroundColor: COLORS.violet,
        marginTop:70,
        marginHorizontal:20,
        borderRadius: 40,
        paddingHorizontal:20,
        overflow: "hidden",
    },
    
    title: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
    },

    btn: {
        height: 50,
        width: 150,
        backgroundColor: "white",
        borderRadius:10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    }
});

export default OnBoardingScreen;
