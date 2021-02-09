import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../utlis/languageContextConfig";

export default function Navbar() {
  const { lang } = useContext(LanguageContext) ;

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <div> Current context lang : {lang}</div>
    </div>
  );
}
