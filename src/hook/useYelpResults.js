import {useEffect,useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=>{
        searchAPI('pasta');
    }, []);

    const searchAPI = async (searchTerm) => {
        console.log('Hi');
        try{ 
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Rio de Janeiro'
            }
        });
        setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage('Problemas na conexão');
        }
    };
    return [searchAPI, results, errorMessage];
};
