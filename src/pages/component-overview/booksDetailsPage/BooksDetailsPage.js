import React from 'react'
import { useLocation } from "react-router-dom";
export default function BooksDetailsPage() {
    const location = useLocation();
    const { data } = location.state; 
    console.log(data)
  return (
    <div>BooksDetailsPage:{data.id}</div>
  )
}
