import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useYelpResults from "../hook/useYelpResults"

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useYelpResults();
    
    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$' 
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <View style={styles.canvas}>
            
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => {setTerm(newTerm)}}
                onTermSubmit={()=>{searchAPI(term)}}
            />
            {errorMessage ?  <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList 
                title="Coste Effective" 
                results={filterResultsByPrice('$')}
            />
            <ResultsList 
                title="Big Pricier"
                results={filterResultsByPrice('$$')}
            />
            <ResultsList 
                title="Big Spender"
                results={filterResultsByPrice('$$$')}
            />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    canvas: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;