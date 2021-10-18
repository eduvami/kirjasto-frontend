import React, { useState, useEffect } from "react"
import bookService from './services/book' 
import Rating from '@mui/material/Rating'

const BookInfo = (props) => {
    
    return (
        <Rating name="half-rating-read" value={props.ratingValue} precision={0.5} readOnly />
    )
} 



const Comments = (props) => {

}

const Recommendations = (props) => {

}

const 

const App = () => {
    const [rating, setRating] = useState('')



    return (
        <div>
            <BookInfo ratingValue={rating}/>
            
        </div>
    )
}

export default App