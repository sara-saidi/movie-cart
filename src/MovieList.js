import React from 'react';
import MovieCard from './MovieCard.js'
import  { useRef, useState } from 'react';
import Filter from './Filter.js';
const MovieList = () => {
   
  const [list,setList] = useState([{name:"Harry potter",imgsr:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhXgqjY31A1d6o9eqeN2EK7GO-qCtiErMXyKI-Y3K&s",rate:"4"},
    {name:"time out",imgsr:"https://play-lh.googleusercontent.com/YMUvhAEj_wdWtC7D_tU4GGdWmhvFhgg-qKzoI31OjJTK2Qx_BNM1tcTVQEPR3RcXP_eWIA",rate:"5"},
    {name:"Joker",imgsr:"https://images.thedirect.com/media/article_full/joker-2-harley-quinn.jpg",rate:"4.5"}
    
    ])
    const p=useRef()
    
    const p3=useRef()
    
  const add=()=>{
    setList([...list,{name:p.current.value,imgsr:p3.current.value}])
    p.current.value=""
    p3.current.value=""
  }

  return (
    <div>
    <input type='text' placeholder='name movie' ref={p}></input><br/>
<input type='text' placeholder='image movie' ref={p3}></input><br/>

<button onClick={add}>Add Movie</button>

<Filter getData={list}/>
{list.map((e)=>
   
  <MovieCard element={e}/>
  )}
<br></br>
<br></br>
<br></br>
<br></br>
    </div>
  );
}

export default MovieList;
