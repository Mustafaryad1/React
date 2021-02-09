import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import * as ACTIONS from '../../store/actions'
import Card from '../../components/controlles/Card'
export default function Products() {
  const Users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTIONS.GetUsers())
    // console.log(products[0]);
   
      
    }
  , [])
  return (
    <div>
        {
          <div className={"container"}>
        <div className="row">
          {Users.map((user,index) => 
          <Card key={index}
          description = {"product descriptions"}
          author = {'auth'}
          title={user.username}/>)}
        </div>
      </div>
        }
    </div>
  )
}
