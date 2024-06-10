import React, { useContext } from 'react';
import Book from './Book';
import { ProductContext } from '../Utills/Context';
import Loading from './Loading';

function Container ()  {
  const [products , setProducts] = useContext(ProductContext);
  console.log("dsfsdfs",products );
  return (
    <div className='w-full px-8'>
        <div className='p-20 flex gap-3 flex-wrap overflow-auto h-[77vh]'>
            {products ? (products.map((ele , index) => <Book index={index} ele={ele} />)) : <Loading/>}
        </div>
    </div>
  );
};

export default Container;