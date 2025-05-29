import './App.css'
import BookList from './Components/BookList'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BookList" element={<BookList />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
