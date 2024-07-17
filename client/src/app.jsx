import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CoinPage } from "./pages/CoinsPage"
import { CoinFormPage } from './pages/CoinFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return(
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to="/Coins"/>} />
          <Route path='/Coins' element={<CoinPage/>} />
          <Route path='/Coins-create' element={<CoinFormPage/>} />
          <Route path='/Coins/:id' element={<CoinFormPage/>} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App