import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import {Feather} from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather 
                name="search" 
                style={styles.iconStyle}
            />
            <TextInput 
                placeholder="Search"
                style={styles.inputStyle}
                onChangeText={newTerm => onTermChange(newTerm)}
                value={term}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;