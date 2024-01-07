import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    // Display an alert when the component mounts
    alert(
      "Make sure you are trying to summarize a news article or another page with clearly defined blocks of text."
    );
  }, []);
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
