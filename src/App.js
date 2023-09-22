import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import StartPage from './components/Main/StartPage/StartPage';
import Direction from './components/Main/InDirection/Direction';
import Footer from './components/Footer/Footer';
import ShowWord from './components/Main/InDirection/CardOfWord/ShowWord';
import NoMatch from './components/Main/NoMatch/NoMatch';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header></Header>
        <Routes>
          <Route exact path='/startPage' element={<StartPage />} />
          <Route exact path='/direction' element={<Direction words={props.words} />} />
          {/* <Route path='/card/:id' element={<Card words={props.words} />} /> */}
          <Route exact path='/game' element={<ShowWord words={props.words} />} />
          <Route exact path='*' element={<NoMatch />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
