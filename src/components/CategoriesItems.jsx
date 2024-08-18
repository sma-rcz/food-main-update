/* eslint-disable no-unused-vars */
//import React from 'react'
import PropTypes from 'prop-types';
//import { useRecipesIntructions } from '../hooks/useRecipesIntructions';
import { Navigate, useNavigate } from 'react-router-dom';
export const CategoriesItems = ({id,title,image}) => {
 //const { fetchInformation} = useRecipesIntructions()

  const navigate = useNavigate();

  const handleClickImg =() =>{
    //fetchInformation(id)
   // Navigate(`/recipe/${id}`);
    navigate(`/intructions/${id}`);
  }
  
  return (
    <div  className="flex flex-col items-center hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
        <div className="w-28 h-28 rounded-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover"
        // onClick={() => openModal({ id, title, image })}
       // data-modal-target="default-modal" data-modal-toggle="default-modal"
          onClick={handleClickImg}
        //  onClick={()=>fetchInformation(id)}
          />
        </div>
        <span className="text-sm">{title}</span>
      </div>




  )
}

CategoriesItems.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
