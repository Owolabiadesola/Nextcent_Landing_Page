import "./App.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import PageFour from "./Component/PageFour";
import PageOne from "./Component/PageOne";
import PageThree from "./Component/PageThree";
import PageTwo from "./Component/PageTwo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <Footer />
    </div>
  );
}

export default App;
