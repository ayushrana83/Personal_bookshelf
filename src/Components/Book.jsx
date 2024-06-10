import React, { useContext } from 'react';
import Button from './Button';
import altBookImg from "../assets/book.avif"
import { BookShelfContext } from '../Utills/LocalStorageContext';

function Book ({index , ele})  {
  const [shelfBooks , setshelfBooks] = useContext(BookShelfContext);

  const addBook = () =>{
    setshelfBooks([...shelfBooks,ele]);
    console.log("books==",shelfBooks );
    localStorage.setItem("shelf_books" , JSON.stringify(setshelfBooks([...shelfBooks,ele])));
  }
  console.log(shelfBooks)
  return (
    <div key={index} className='w-[23%]  flex gap-3 flex-col px-5 py-5 border-2'>
        <img src={`https://covers.openlibrary.org/b/id/${ele.cover_i}-L.jpg`} className='w-[80%] h-[60%] object-contain' alt={altBookImg} />
        <div className='w-[80%] mx-auto'>
        <h1 className='text-xl font-semibold capitalize'>title : {ele.title}</h1>
        <h3 className='font-medium text-lg capitalize'>Edition : {ele.edition_count}</h3>
        <h3 className='text-lg font-medium capitalize'>Author : {ele.author_name}</h3>
        </div>
        <div className='w-[60%] mx-auto' onClick={addBook}>
        <Button />
          </div>
    </div>
  );
};

export default Book;



