import { useContext } from "react";
import LanguageContext from "../../utlis/languageContextConfig";

export default function Contact() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <div>
      Hello From Contact : language : {lang}
      <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>Change lang</button>
    </div>
  );
}
