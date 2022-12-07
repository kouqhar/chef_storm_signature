import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  Components
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Pages/Home/Home";
import About from "./containers/Pages/About/About";
import Contact from "./containers/Pages/Contact/Contact";
import Menu from "./containers/Pages/Menu/Menu";
import Location from "./containers/Pages/Location/Location";
import ScrollIntoView from "./components/ScrollView/ScrollIntoView";

// Styles
import styles from "./styles/App/App.module.css";

const App = () => {
  return (
    <Router>
      <ScrollIntoView>
        <div className={styles.Container}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/location" element={<Location />} />
            </Routes>
          </Layout>
        </div>
      </ScrollIntoView>
    </Router>
  );
};

export default App;
