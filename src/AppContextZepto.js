import React, { createContext, useContext, useState,useEffect } from 'react';
import axios from "axios";

const storedWishList = JSON.parse(localStorage.getItem('wishList')) || [];



export const AppContext = createContext();

export default function AppContextZepto({ children }) {

const [zeptoData, setZeptoData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [filteredData, setFilteredData] = useState([]);
const [wishList,setWishList] = useState(storedWishList);




useEffect(() => {
    axios
      .get("https://gutendex.com/books")
      .then((response) => {
        setZeptoData(response.data.results);
        setFilteredData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, [wishList]);

  

  const handleWishList = (product) => {

    if (wishList.some((item) => item.id === product.id)) {
      // Remove product from wishlist if it exists
      setWishList(wishList.filter((item) => item.id !== product.id));
    } else {
      // Add product to wishlist
      setWishList([...wishList, product]);
    }



  }


  return <AppContext.Provider
   value={{zeptoData, setZeptoData,filteredData, setFilteredData, wishList,setWishList ,handleWishList}}>{children}</AppContext.Provider>;
}

export const useAppContextZepto = () => {
  return useContext(AppContext);
};
