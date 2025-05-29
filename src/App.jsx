import BookList from "./Pages/BookList"
import Books from "./Pages/Books"
import { Route, Routes, Link } from "react-router-dom"
import Home from "./Pages/Home"
import NewBooks from "./Pages/NewBooks"

function App() {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
    </nav>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} /> 
        
        <Route path="/books/" element={<BookList />} />

        <Route path="/books/:id" element={<Books />} />

        <Route path="/books/new" element={<NewBooks />} />
      </Routes>
    </>
  )
}

export default App
