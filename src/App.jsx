// import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={'/authors'}>authors</Link>
          <Link to={'/books'}>books</Link>
          <Link to={'/newBook'}>add book</Link>
        </nav>
      </header>

    <Routes>
      <Route path='/authors' element={<Authors/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/newBook' element={<NewBook/>}/>
      <Route path='/*' element={<Authors/>}/>

    </Routes>
    </div>
  )
}

export default App
