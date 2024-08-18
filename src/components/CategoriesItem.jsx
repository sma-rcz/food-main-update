//import React from 'react'
import PropTypes from 'prop-types';
//import { useState } from 'react';
//import { CategoriesModal } from './CategoriesModal';
//import { useRecipesIntructions } from '../hooks/useRecipesIntructions';


export const CategoriesItem = ({data,showAll}) => {
    //const [isModalOpen, setisModalOpen] = useState(false);
  
/*
    const openModal = () =>{
      setisModalOpen(true);
    }

    const closeModal = () =>{
        setisModalOpen(false);
        }*/

  return (
    <div className="flex gap-3 justify-center items-center flex-wrap py-4">

    {
      data.slice(0,showAll ? data.length : 5).map(({id,title,image} ) =>(
      <div key={id} className="flex flex-col items-center hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
        <div className="w-28 h-28 rounded-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover"
        // onClick={() => openModal({ id, title, image })}
       // data-modal-target="default-modal" data-modal-toggle="default-modal"
         // onClick={()=>hadleClickImg(id)}
        //  onClick={()=>fetchInformation(id)}
          />
         

        </div>
        <span className="text-sm">{title}</span>
      </div>
     ))}
    {
        /*

        isModalOpen &&(
            <CategoriesModal  closeModal={closeModal}      />
        )*/
    
    
    
    /*
        isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                    <h2>Modal</h2>
                    <button
                    className='bg-cyan-100 p-2 rounded-md text-sm hover:transition-colors hover:duration-500 hover:bg-cyan-800 ease-in-out font-semibold'
                    onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        )*/
    }




    
    </div>

    
  )
}


CategoriesItem.propTypes ={
    data: PropTypes.array.isRequired,
    showAll: PropTypes.bool.isRequired,
    
  }