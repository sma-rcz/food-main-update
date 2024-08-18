import axios from "axios";


export const foodsApi = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
    params:{
        apiKey:'2e039a3ad81b4c17859549d4d270d992',
        //number: 10,
    }
})
 
