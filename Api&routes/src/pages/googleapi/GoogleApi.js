import  { useEffect,useState } from 'react'
import axios from 'axios';
import Input from '../../components/controlles/input';
import Button from '../../components/controlles/button';
import Card from '../../components/controlles/Card';

// add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers.token = '34534634xdfyh54wyhgsdryw45yhsr5';
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});




export default function GoogleApi() {
  document.title="Book Search"
  const [books, setbooks] = useState([])
 
    const getData =()=>{
      const search = document.getElementsByName('search')[0].value;
      axios.get(`https://www.googleapis.com/books/v1/volumes?`,{
        params:{
          q:search
        }
      }
      )
        .then(res => {
          // 
          setbooks(res.data.items)
          console.log(books)
        })
    }
    const onInputChange = (e)=>{
      // console.log(e)
    }
  return (
    <>
      <div className={"container bg-info p-3 mt-5"}>
          <Input name={"search"}
                type={"text"}
                onInputChange={onInputChange}
          ></Input>
          <Button
                onButtonClick={getData}
                class={"btn btn-dark"}
                name={"search"}
          ></Button> 
        
      </div>
      <div className={"container"}>
        <div className="row">
          {books.map((book,index) => 
          <Card key={index}
          description = {"book descriptions"}
          author = {'auth'}
          title={book.volumeInfo.title}/>)}
        </div>
      </div>
    </>
  )
}
