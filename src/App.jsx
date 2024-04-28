// import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  const navStyle = {
    nav: {
      display: 'flex',
      gap: 12,
      paddingBottom: 8,
      borderBottom: '1px solid gray'
    },
    link: {
      textDecoration: 'none',
      border: '1px solid gray',
      color: 'black',
      padding: 8,
      borderRadius: 4
    }
  }

  return (
    <div>
      <header>
        <nav style={navStyle.nav}>
          <Link style={navStyle.link} to={'/authors'}>authors</Link>
          <Link style={navStyle.link} to={'/books'}>books</Link>
          <Link style={navStyle.link} to={'/newBook'}>add book</Link>
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
