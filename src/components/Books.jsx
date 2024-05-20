import { useState } from 'react'
import Select from 'react-select'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
import { useFilterBooks } from '../hooks/useFilterBooks'

const Books = (props) => {
  const query = useQuery(ALL_BOOKS)
  const [selectedGenre, setSelectedGenre] = useState(null)

  if (query.loading) return <div>...loading</div>

  const books = query.data.allBooks

  const genres = new Set(books.map(b => b.genres).flat())
  const selectionOfGenres = Array.from(genres).map(e => ({ value: e, label: e }))
  selectionOfGenres.unshift({ value: 'All', label: 'All' })

  const filterBooks = (b) => {
    if (selectedGenre !== null) {
      if (selectedGenre.value === 'All' || b.genres.includes(selectedGenre.value)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }

  const filteredBooks = useFilterBooks({ books, filterFn: filterBooks })
  // const filteredBooks = filterBooks()

  return (
      <div>
        <h2>books</h2>

      <Select defaultValue={selectedGenre} onChange={setSelectedGenre} options={selectionOfGenres}/>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>author</th>
              <th>published</th>
            </tr>
            {filteredBooks.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Books
