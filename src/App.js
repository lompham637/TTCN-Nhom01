/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import NavBar from "./components/Nav";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Section />
      <Footer />
     
    </div>
  );
}
export default App;