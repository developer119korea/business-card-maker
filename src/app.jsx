import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/home" element={<Home authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
