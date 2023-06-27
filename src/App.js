import Header from './components/Header/Header';
// import StartPage from './components/Main/StartPage';
import Direction from './components/Main/Direction';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      {/* <StartPage></StartPage> */}
      <Direction></Direction>
      <Footer></Footer>
    </div>
  );
}

export default App;
