import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
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
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
