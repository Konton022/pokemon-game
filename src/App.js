import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import background from './assets/bg1.jpeg'

function App() {
  return (
    <div className="App">
      <Header title="This is header title string" descr = "This is description" />
      <Layout title = "This is first title string" descr = "This is description string" urlBg = {background}/>
      <Layout title = "This is second title string" descr = "This is description string" colorBg = "#8c999d"/>
      <Layout title = "This is thrid title string" descr = "This is description string" urlBg = {background}/>
      <Footer />
    </div>
  );
}

export default App;
