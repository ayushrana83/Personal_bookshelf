import React, { createContext, useState, useEffect } from "react";

export const BookShelfContext = createContext();

function Context2(props) {
  const [shelfBooks, setShelfBooks] = useState(() => {
    const savedBooks = localStorage.getItem("shelf_books");
    return savedBooks != "undefined" ? JSON.parse(savedBooks) : null;
  });

  useEffect(() => {
    localStorage.setItem("shelf_books", JSON.stringify(shelfBooks));
  }, [shelfBooks]);

  return (
    <BookShelfContext.Provider value={[shelfBooks, setShelfBooks]}>
      {props.children}
    </BookShelfContext.Provider>
  );
}

export default Context2;
