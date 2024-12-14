import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BookCard from '../../components/BookCard'

const Book:React.FC = () => {
  return (
    <div>
       <Header/>
      <div>
        <BookCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default Book
