//import React from 'react'

import { useParams } from "react-router-dom"
import { useRecipesIntructions } from "../hooks/useRecipesIntructions";
import { IntructionsComponent } from "./components/IntructionsComponent";
import { IntructionsCard } from "./components/IntructionsCard";
//import useRecipesIntructions from "../hooks/useRecipesIntructions";

export const Intructions = () => {
  const {id} = useParams();
  const {information} = useRecipesIntructions(id);
  console.log(information);
 // const recipe = useRecipesIntructions(id);
 // console.log(recipe);
  return (
  
  <div>
      <div >
        <IntructionsCard information={information} />
      </div>
      <div>
        <IntructionsComponent dataInfo={information} />
      </div>

      







      {/**
       * 
       * <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-3xl font-bold text-center">{information.title}</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-3xl font-bold text-center">{information.title}</h1>
        </div>
       */}
      
      {/**
       * 
       * <h1 className="text-3xl font-bold text-center">{information.title}</h1>
      <img className="w-96 h-96 rounded-lg" src={information.image} alt={information.title} />
      <p className="text-lg text-center">{information.instructions}</p>
       * 
       */}
      
    
   
        {/**
         * 
         * 
         * <h1 className="  ">{information.title}</h1>
      <img  className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none  "
      
      src={information.image} alt={information.title} />
         */}
       
     


         
        
 
  </div>
    

    
  )
}
