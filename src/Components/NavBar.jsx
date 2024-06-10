import React, { useContext, useState } from 'react';
import { ProductContext } from '../Utills/Context';
import { Link } from 'react-router-dom';

function NavBar() {
  const [bookName, setBookName] = useState("");
  const [products, setProducts] = useContext(ProductContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('Book name submitted:', bookName);

    try {
      if (!bookName.trim()) {
        alert("Please enter a book name.");
        return;
      }

      const search = bookName.replaceAll(" ", "+");
      console.log('Search query:', search);
      const response = await fetch(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received:', data);
      setProducts(data.docs);
      console.log("products setted");
      console.log(products);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert("Error fetching data. Please try again later.");
    }
  };

  return (
    <div className='w-full flex items-center justify-center gap-10 mt-8'>
      <div className='basis-1/3'>
        <h1 className='text-4xl tracking-tighter leading-none font-semibold mb-2'>Search Book Name</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className='border-4 px-4 py-2 rounded-full font-semibold text-2xl text-zinc-800'
            value={bookName}
            placeholder='Enter Book Name'
            onChange={(e) => setBookName(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 ml-3 text-2xl py-2 font-medium border-4 rounded-full border-blue-200 text-blue-400"
          >Search</button>
        </form>
      </div>
      <div>
        <Link to={"/shelf"} className='px-7 py-4 text-xl capitalize font-semibold border-2 bg-blue-300 rounded-full'>Bookshelf</Link>
      </div>
    </div>
  );
}

export default NavBar;
