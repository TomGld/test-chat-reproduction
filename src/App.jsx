import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import AnalyseStep1 from './pages/analyser/analyseStep1'
import AnalyseStep2 from './pages/analyser/AnalyseStep2'
import ProductDetail from './pages/analyser/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyse" element={<AnalyseStep1 />} />
      <Route path="/analyse/step2" element={<AnalyseStep2 />} />
      <Route path="/analyse/result/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
