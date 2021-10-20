import React, { useState, useEffect } from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container' 
import Rating from '@mui/material/Rating'
import Grid from '@mui/material/Grid'

// Components for the page

const BookInfo = (props) => {
    
    return (
        <Rating name="half-rating-read" value={props.ratingValue} precision={0.5} readOnly />


    )
} 


const Comments = (props) => {
    return (null)
}

const Recommendations = (props) => {
    return (null)
}

// Page exporting

const SingleBookPage = (props) => {
    const [rating, setRating] = useState('')

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <BookInfo ratingValue={rating}/>
            <Comments/>
            <Recommendations/>
        </Container>
        </React.Fragment>
    )
}

export default SingleBookPage