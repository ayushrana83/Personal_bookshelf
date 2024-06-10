import React, { useContext } from 'react';
import altBookImg from "../assets/book.avif"
import { BookShelfContext } from '../Utills/LocalStorageContext';
import Button2 from './Button2';

function Book ({index , ele})  {
  const [shelfBooks , setshelfBooks] = useContext(BookShelfContext);

  const removeBook = () =>{
    setshelfBooks(shelfBooks.filter((book) => book.title != ele.title));
    console.log("books==",shelfBooks );
    localStorage.setItem("shelf_books" , JSON.stringify(setshelfBooks(shelfBooks.filter((book) => book.title != ele.title))));
  }
  console.log(shelfBooks)
  return (
    <div key={index} className='w-[30%] py-4 flex flex-col gap-5 border-2 h-[70vh]'>
        <img src={`https://covers.openlibrary.org/b/id/${ele.cover_i}-L.jpg`} className=' h-[50%] object-contain' alt={altBookImg} />
        <div className='w-[80%] mx-auto'>
        <h1 className='text-xl font-semibold capitalize'>title : {ele.title}</h1>
        <h3 className='font-medium text-lg capitalize'>Edition : {ele.edition_count}</h3>
        <h3 className='text-lg font-medium capitalize'>Author : {ele.author_name}</h3>
        </div>
        <div className='w-[60%] mx-auto' onClick={removeBook}>
        <Button2 />
          </div>
    </div>
  );
};

export default Book;



