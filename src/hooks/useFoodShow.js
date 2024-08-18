import  { useEffect, useState } from 'react'
import { foodsApi } from '../apis';

export const useFoodShow = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setdata] = useState([]); //data
   const [showAll, setshowAll] = useState(false); //band for show all categories

  //funcion showAll
  const hadleShowAll = () =>{
    setshowAll(!showAll);
  }


  


  //useEffect for fetch data
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const resp = await foodsApi.get();
        /*
        const resp = await foodsApi.get('',{
          params:{
            cuisine:'All',
          }
        });*/
       // console.log(resp);
        const { results } = resp.data;
       // console.log(results);
        setdata(results);
      } catch (error) {
        console.log(`Error: ${error}`);
        
      }
    };
    fetchData();
  },[]);
  //console.log(data);


  return {
    data,
    showAll,
    hadleShowAll,
  }
}
