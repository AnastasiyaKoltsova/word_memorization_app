import Header from './components/Header/Header';
import StartPage from './components/Main/StartPage/StartPage';
import Direction from './components/Main/InDirection/Direction';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header></Header>
        <Routes>
          <Route path='/startPage' element={<StartPage />} />
          <Route path='/direction' element={<Direction />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
