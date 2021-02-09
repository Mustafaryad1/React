import React from 'react'
import { Link} from "react-router-dom";
import Span from '../controlles/navSpan';
import {useSelector} from 'react-redux';

export default function Navbar() {
  let login = localStorage.getItem('email') || 'login';
  const state = useSelector(state => state)
  console.log(state.username);
  return (
    <> 
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                <Link to="/home" >
                    <Span class={"text-info m-1 text-lg font-weight-bold"} name={"Home"}/>
                </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <Span class={"text-info m-1 text-lg font-weight-bold"} name={"About"} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/google-search">
                     <Span class={"text-info m-1 text-lg font-weight-bold"} name={"Google-Search"} />
                  </Link>
                </li> 
                <li className="nav-item">
                  <Link to="/products">
                     <Span class={"text-info m-1 text-lg font-weight-bold"} name={"Products"} />
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item  ">
                  {(state.username === 'login')?
                  <Link to="/login">
                    <Span class={"text-info m-1 text-lg font-weight-bold"} name={'login'}/>
                  </Link>:
                  <>
                    <Link to="/login">
                      <Span class={"text-info m-1 text-lg font-weight-bold"} name={'Logout'}/>
                    </Link>
                    <Span class={"text-info m-1 text-lg font-weight-bold "} name={state.username}/>   
                  </>
                  }
                </li>
             </ul>
        </nav>
     
    </>
  )
}
