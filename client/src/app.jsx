import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CoinPage } from "./pages/CoinsPage"
import BlockchainPage from "./pages/BlockchainPage"
import { AdministrationPage } from './pages/AdministrationsPage'
import { InvestPage } from './pages/InvestsPage'
import { Index } from './pages/Index'
import { StakingsPage } from './pages/StakingsPage'
import { StakingFormPage } from './pages/StakingFormPage'
import { CoinFormPage } from './pages/CoinFormPage'
import StakingDetailTable from './components/StakingDetailTable'
import BlockchainFormPage from './pages/BlockchainFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/' element={<Navigate to="/Coins" />} />
          <Route path='/Coins' element={<CoinPage />} />
          <Route path='/Coins-create' element={<CoinFormPage />} />
          <Route path='/Coins/:id' element={<CoinFormPage />} />
          <Route path='/administracion' element={<AdministrationPage />} />
          <Route path='/inversiones' element={<InvestPage />} />
          <Route path='/Stakings/:type' element={<StakingsPage />} />
          <Route path='/Stakings-create' element={<StakingFormPage />} />
          <Route path='/Stakings/:type/:id' element={<StakingFormPage />} />
          <Route path='/StakingDetail/:details' element={<StakingDetailTable />} />
          <Route path='/Blockchains' element={<BlockchainPage />} />
          <Route path='/Blockchains-create' element={<BlockchainFormPage />} />
          <Route path='/Blockchains/:id' element={<BlockchainFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App