import BookList from "./Components/BookList"
import Books from "./Components/Books"
import { Route, Routes, Link } from "react-router-dom"
import Home from "./Components/Home"

function App() {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/BookList">Books</Link>
    </nav>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} /> 
        
        <Route path="/BookList" element={<BookList />} />
      </Routes>
    </>
  )
}

export default App
