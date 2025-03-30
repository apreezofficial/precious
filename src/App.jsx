import './App.css';
import SEO from "./seo";
import FAQSchema from "./FAQSchema";
import Navbar from './components/navbar'
import Page from './components/page'
function App() {
  return (
     <>
       <SEO />
      <FAQSchema />
     <Navbar />
     <Page />
     </>   
  );
}

export default App;
