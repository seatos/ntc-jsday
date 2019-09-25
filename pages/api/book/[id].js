import { book } from '../../../data'

export default ({ query: { id } }, res) => {
  const filtered = book.filter(p => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Book with id: ${id} not found.` })
  }
}