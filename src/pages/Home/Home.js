import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, changeLanguageAction } from "../../store/actions";

export default function Home() {
//   const lang = useSelector((state) => state.lang);
//   const cart = useSelector((state) => state.cart);
  const { lang : { lang } , cart : { cartCount }} = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeCurrentLang = () => {
    dispatch(changeLanguageAction(lang === "ar" ? "en" : "ar"))
  }

  const changeCartCount = () => {
    dispatch(addToCartAction(cartCount+1))
  }
  return (
   <>
    <div>Current language is : {lang}</div>
    <button onClick={changeCurrentLang}>Change Language</button>
    <div> Cart count : {cartCount}</div>
    <button onClick={changeCartCount}>Increase count</button>
   </>
  );
}
