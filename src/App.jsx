import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import { Routes, Route, Link } from 'react-router-dom'
import { useApolloClient, useQuery } from '@apollo/client'
import { Recommendations } from './components/Recommendations'
import { ME } from './queries'

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
  const me = useQuery(ME)
  const client = useApolloClient()
  const [token, setToken] = useState(localStorage.getItem('library-user-token'))
  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  const menu = !token
    ? (<nav style={navStyle.nav}>
          <Link style={navStyle.link} to={'/authors'}>authors</Link>
          <Link style={navStyle.link} to={'/books'}>books</Link>
          <Link style={navStyle.link} to={'/login'}>login</Link>
        </nav>)

    : (<nav style={navStyle.nav}>
          <Link style={navStyle.link} to={'/authors'}>authors</Link>
          <Link style={navStyle.link} to={'/books'}>books</Link>
          <Link style={navStyle.link} to={'/newBook'}>add book</Link>
          <Link style={navStyle.link} to={'/recommendations'}>recommendations</Link>
          <button style={navStyle.link} onClick={logout} >logout</button>
    </nav>)
  return (
    <div>
      <header>
        {menu}
      </header>

    <Routes>
      <Route path='/authors' element={<Authors/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/login' element={<Login setToken={setToken}/>}/>
      <Route path='/newBook' element={<NewBook token={token}/>}/>
      <Route path='/recommendations' element={<Recommendations user={me}/>}/>
      <Route path='/*' element={<Authors/>}/>
    </Routes>
    </div>
  )
}

export default App
