import React, { useContext } from 'react';
import Book2 from './Book2';
import { BookShelfContext } from '../Utills/LocalStorageContext';
import Loading from './Loading';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Shelf_container ()  {
  const [shelfBooks, setShelfBooks] = useContext(BookShelfContext);
  console.log("dsfsdfs",shelfBooks );
  
  return (
    <div className='w-full px-16 flex'>
      <Link to={"/"} className='w-10'>
      <IoHome className='w-16 h-24'/>
      </Link>
        <div className='w-[80vw] p-10 flex gap-3 flex-wrap overflow-auto h-[77vh]'>
            {shelfBooks !=null && shelfBooks !="undefined" && shelfBooks.length > 0 ? (shelfBooks.map((ele , index) => (
                <Book2 index={index} ele={ele}/>
                ))) : <Loading title='No books in the Shelf'/>}
        </div>
    </div>
  );
};

export default Shelf_container;
