//import React from 'react'

export const CategoriesModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2>Modal</h2>
        <button
        className='bg-cyan-100 p-2 rounded-md text-sm hover:transition-colors hover:duration-500 hover:bg-cyan-800 ease-in-out font-semibold'
        >Cerrar</button>
    </div>
</div>
  )
}

