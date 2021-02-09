import {Route} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Navbar from "../components/layout/navbar";
// import { GuardProvider, GuardedRoute } from 'react-router-guards';
// import components as lazy-loading 
const Aboutus = lazy(()=> import('../pages/about/Aboutus'));
const Todo = lazy(()=> import('../pages/todo/Todo'));
const GoogleApi = lazy(()=> import('../pages/googleapi/GoogleApi'));
const Login = lazy(()=> import('../pages/login/login'));
const Products = lazy(()=> import('../pages/products/Products'));

//
// const requireLogin = (to, from, next) => {
//   if (to.meta.auth) {
//     if (getIsLoggedIn()) {
//       next();
//     }
//     next.redirect('/login');
//   } else {
//     next();
//   }
// };

export default function Routes() {
  return (
    <>
        <Navbar/>
          <Suspense fallback={<div>loading...</div>}>
                <Route  path="/" exact component={Todo}/>
                <Route  path="/home" exact component={Todo}/>
                <Route  path="/about" exact component={Aboutus}/>
                <Route  path="/google-search" exact component={GoogleApi}/>
                <Route  path="/login" exact component={Login}/>
                <Route  path="/products" exact component={Products}/>
          </Suspense>
  
    </>
  )
}
