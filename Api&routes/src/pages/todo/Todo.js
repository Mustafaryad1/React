import {useState} from 'react'
import Button from "../../components/controlles/button"
import Input from "../../components/controlles/input";


export default function Todo() {
  document.title = "Home"
  const [listItems, setlistItems] = useState([])
  const [inputItem, setinputItem] = useState("")
  const onInputChange = (e)=>{
    setinputItem({
      inputItem:e.target.value
    })
  }
  const addItem = (e)=>{
    const input = document.getElementsByName("todoitem")[0];
    input.value = ""
    setlistItems((prevList)=>{
      return [...prevList,inputItem.inputItem]
    })
    console.log(listItems);
  }
  const itemDone = (e) =>{
    const span = e.target.parentElement.parentElement.childNodes[2];
    span.style.textDecoration = "line-through";
    span.classList.add("text-success");
    console.log(span);
  }  
  return (
    <div className={"container mt-5 bg-dark p-4"}>
    <h1 className="text-light m-0">To-Do App!</h1>
    <br/>
    
    <p className="text-light m-0 p-0">Add new To-Do</p>
      <Input 
            onInputChange={onInputChange}
            name={"todoitem"}
             type={"text"}

      />
      <Button 
              class={"btn btn-primary m-2"}
              name={"Add"}
              onButtonClick={addItem}
      />
      <div className="p-3">
          <ul className="list-group " >
         {listItems.map((item,index)=>
         
         <li id={`item${index}`} key={index}
          className="list-group-item bg-dark text-light border border-sliver">
                {index} - <span className="font-size-lg">{item}</span> 
                <div className="float-right">
                <Button name={"Done"} 
                        class={'btn btn-success m-1'}
                         onButtonClick={itemDone}
                        />

                <Button name={"Delete"} 
                        class={'btn btn-danger m-1'}/>
                </div> 
            </li>)}
          </ul>
      </div>
    </div>
  )
}
