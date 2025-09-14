
import './App.css'
import { Home } from './screens/Home/Home';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
