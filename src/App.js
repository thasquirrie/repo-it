import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='bg-white'>
          <div className='relative overflow-hidden'>
            <Header />
            <main className=''>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
