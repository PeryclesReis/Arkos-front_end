import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingComp = ({ rate }) => {
  const [rating, setRating] = useState(rate);

  useEffect(() => {
    setRating(rate);
  }, [rate])

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div className='App'>
      <Rating onClick={ handleRating } ratingValue={ rating } /* Rating Props */ />
    </div>
  )
}

export default RatingComp;
