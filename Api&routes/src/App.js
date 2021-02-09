import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/routes'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useSelector,useDispatch} from 'react-redux'
import * as ACTIONS from './store/actions'
import {useContext} from 'react'
import LanguageContex from './utils/languageContext'

function App() {
  const {language} = useContext(LanguageContex)
  const state = useSelector(state => state)
  console.log(state);
  const dispatch = useDispatch()
  const increaseCounter = ()=>{
    state.result +=1;
    dispatch(ACTIONS.IncreaseCounter(state))
  }
  const DecreaseCount = ()=>{
    state.result -=(state.result)?1:0;
    dispatch(ACTIONS.IncreaseCounter(state))
  }
  const ChangeLanguage = ()=>{
    state.lan = (state.lan === 'en')?'ar':'en';
    dispatch(ACTIONS.ChangeLanguage(state)) // state ...{} ||| value
  }
  return (
    
    <>
    









    <Router>
        <Routes/>
     </Router> 

           {/* <div className={"container border"}> 
           {/* <h1>Welcome ya 3m redux</h1>  
               <div className={(state.lan=='en')?"float-left":"float-right"} style={{width:"30%"}}>
                <span className={"badge badge-warning m-1"}>{state.result}</span>
                {(state.lan=="en")?"english":'عربي'}
                <span>This context language {}</span>
                <button className={"btn btn-primary btn-sm m-1"} onClick={increaseCounter}> + counter</button>
                <button className={"btn btn-primary btn-sm m-1"} onClick={DecreaseCount}> - counter</button>
                <button className={"btn btn-secondary btn-sm m-1"} onClick={ChangeLanguage}>Change Language</button>
              </div> 
            </div> */}

      

    </>
  );
}

export default App;
