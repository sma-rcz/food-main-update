import axios from "axios";




export const recipesApi = (id) => axios.create({
 
     baseURL:`https://api.spoonacular.com/recipes/${id}/information`,
     params:{
        apiKey:'2e039a3ad81b4c17859549d4d270d992',
    }
})
