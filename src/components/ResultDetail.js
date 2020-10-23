import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 

const ResultDetail = ({result}) => {
    return (
        <View style={sytles.container}>
            {!result.image_url || result.image_url === ''?  
                <EvilIcons name="image" style={sytles.iconStyle} /> 
            : <Image source={{ uri: result.image_url}} style={sytles.image}/>}
            <Text style={sytles.name}>{result.name}</Text>
            <Text style={sytles.detailText}>{result.rating} Stars, {result.review_count} reviews</Text>
        </View>
    );
};

const sytles = StyleSheet.create({
    image: {
        width: 215,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
        fontSize: 14
    },
    container: {
        marginLeft: 15
    },
    detailText: {
        color: 'gray'
    },
    iconStyle: {
        fontSize: 180,
        color: "gray",
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default ResultDetail;