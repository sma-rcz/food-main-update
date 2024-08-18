import { useEffect, useState } from "react"
import { recipesApi } from "../apis";


 export const useRecipesIntructions = (id) => {  
 const [information, setInformation] = useState([]);



const fetchInformation = async (id) =>{
    try{
        const resp = await recipesApi(id).get();
        const {data} = resp;
      //  console.log(data);
        setInformation(data);
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
  

}
useEffect (() =>{
   if(id){
         fetchInformation(id);
   }
        // fetchInformation();
   
},[id]);

/*
const hadleClickImg = (id) =>{

   
}*/

 return{
        information,
        fetchInformation

 }
}
//export default useRecipesIntructions,;
