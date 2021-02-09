import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { LanguageProvider } from "./utlis/languageContextConfig";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState('en');
  return (
    <Router>
      <LanguageProvider value={{lang, setLang}}>
        <Navbar />
        <Routes />
      </LanguageProvider>
    </Router>
  );
}

export default App;
