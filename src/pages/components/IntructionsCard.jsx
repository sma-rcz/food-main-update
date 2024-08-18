import PropTypes from 'prop-types';
import { useState } from 'react';

export const IntructionsCard = ({information}) => {
 const [isExpanded, setisExpanded] = useState(false);
 
  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  
  const handleClick = () => {
    //console.log('click');
    setisExpanded(!isExpanded);
  }

  const textToShow = isExpanded 
  ? stripHtmlTags(information.summary)
  : stripHtmlTags(information.summary).slice(0, 200) + '...';
  


  return (
    <div className=" container mx-auto px-20 bg-slate-50  shadow-md  bg-cover  ">


    
    <div className="grid lg:grid-cols-2 gap-5 ">
    <div>
      <img className="w-auto h-96 rounded-lg mt-3 mb-3 shadow-md"
        src={information.image} alt={information.title} />

    </div>
    <div className=" flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-2 font-bold text-center">{information.title}</h3>
      <p className="text-lg cur cursor-pointer " onClick={
        handleClick
      }>{textToShow}</p>
    </div>
  </div>
  </div>
  )
}

IntructionsCard.propTypes = {
  information: PropTypes.any.isRequired,
}
