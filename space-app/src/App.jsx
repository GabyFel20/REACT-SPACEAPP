import Navbar from './components/navbar/Navbar';
import './App.css';
import Hero from './components/hero/Hero';

function App() {
  const links = [
  {
   id: 1,
   text: 'home',
   link: "/",
  },

  {
    id:2,
    text: 'apod',
    link:'/apod',
  },

  {
    id:3,
    text: 'astros',
    link:'/astros',
  },

  ];


  return(
  <>
  <Navbar header="space-app" links={links} />
  <Hero />
  </>);
}

export default App;
