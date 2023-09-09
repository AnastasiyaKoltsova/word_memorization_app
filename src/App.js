import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import StartPage from './components/Main/StartPage/StartPage';
import Direction from './components/Main/InDirection/Direction';
import Card from './components/Main/InDirection/CardOfWord/Card';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header></Header>
        <Routes>
          <Route path='*' element={<StartPage />} />
          <Route path='/direction' element={<Direction words={props.words} />} />
          {/* <Route path='/card/:id' element={<Card words={props.words} />} /> */}
          <Route path='/card' element={<Card words={props.words} />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
