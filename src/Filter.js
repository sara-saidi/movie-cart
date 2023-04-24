
import React from 'react';
import {useState , useEffect} from 'react';
import './filter.css'
const Filter = () => {
 const [data, setData]=useState([]);
 const [searchTerm, setSearchTerm]=useState("");
 
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setData(json))
 },[])
 const handelSearchTerm=(e)=>{
  
  let value=e.target.value
  setSearchTerm (value)
 }
 console.log(searchTerm)
  
  return (
    <div>
    <div className='serach'>
   
      <input type="text" placeholder='search'  onChange={handelSearchTerm}></input>
      </div>
      <div className='searchResults'>
      {data.filter((val)=>{
        return val.title.includes(searchTerm)
      }).map((val)=>{
       return  <div className='searchResult'key={val.id}> {val.title}</div>
      })}
      
     
      
      </div>
    </div>
  );
}

export default Filter;