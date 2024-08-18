import { useFoodShow } from "../hooks/useFoodShow";
//import { CategoriesItem } from "./CategoriesItem";
import { CategoriesItems } from "./CategoriesItems";

export const Categories = () => { 
const {data,showAll,hadleShowAll   } = useFoodShow();
//  console.log(data);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center px-4">
        <h2>Categories</h2>
        <button className="bg-cyan-100 p-2 rounded-md text-sm hover:transition-colors hover:duration-500 hover:bg-cyan-800 ease-in-out font-semibold"
        onClick={hadleShowAll}
        >
          View All Categories
        </button>
      </div>

      <div className="flex gap-3 justify-center items-center flex-wrap py-4">
      {
        data.slice(0,showAll ? data.length : 5).map((data ) =>(
          <CategoriesItems key={data.id} {...data}/>
        ))  
      }
        </div>
     
      
  {/**
   * 
   *      <CategoriesItem  data={data} showAll={showAll} />
   * 
   */}
    </div>
  );
};





