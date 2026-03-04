import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Diary from './pages/Diary';

function App() {
  return (
    <Router>
      <div className="app-grid min-h-screen bg-[#0B1220] text-[#E5E7EB]">
        <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[#0B1220]/85 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-end px-6">
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-6 text-base font-medium text-[#E5E7EB]">
                {/* <li>
                  <Link className="transition-colors hover:text-[#22D3EE]" to="/">
                    Home
                  </Link>
                </li> */}
                {/* <li>
                  <Link className="text-[#F9FAFB] transition-colors hover:text-[#818CF8]" to="/diary">
                    Diary
                  </Link>
                </li> */}
                {/* <li>
                  <a className="text-[#F9FAFB] transition-colors hover:text-[#818CF8]" href="/#vision">
                    Vision
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/diary" element={<Diary />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
