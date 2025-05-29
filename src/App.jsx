import BookList from "./Pages/BookList"
import Books from "./Pages/Books"
import { Route, Routes, Link } from "react-router-dom"
import Home from "./Pages/Home"
import NewBooks from "./Pages/NewBooks"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<NewBooks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
