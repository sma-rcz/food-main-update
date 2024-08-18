import PropTypes from 'prop-types';

export const IntructionsComponent = ({dataInfo}) => {
  console.log(dataInfo);

  if (!dataInfo || !dataInfo.extendedIngredients) {
    return <div>Error: No se proporcionó información de los ingredientes.</div>;
  }


  const {extendedIngredients} = dataInfo;

  const steps = dataInfo.analyzedInstructions[0].steps;
 
 
  return (
    <div className="grid grid-cols-1 gap-4  md:grid-cols-1 lg:grid-cols-3 container  ">
    <div className= "max-w-sm   mx-auto bg-slate-50 rounded-lg shadow-md overflow-hidden mt-10 container  col-span-1 ">
  
       <h3 className="text-3xl font-bold text-center">Ingredients</h3>
      {
        extendedIngredients.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-4 border-b">
            <span>{item.name}</span>
            <span>{item.amount} {item.unit}</span>
          </div>
        ))
      }
     

    </div>  

    <div className= " mt-10 container col-span-2    ">
  
       <h3 className="text-3xl font-bold text-center">Analyzed Instructions</h3>
     {
        steps.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-4 border-b">
            <span>{item.number}</span>
            <span>{item.step}</span>
          </div>
        ))
     }
      
     

    </div>  

    </div>
   
  )
}

IntructionsComponent.propTypes = {
  dataInfo: PropTypes.any.isRequired,

}