import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import Button from 'react-bootstrap/Button';
const MovieCard = ({element}) => {

  // for rate zone
  const thirdExample = {
    size: 40,
    count: 7,
    isHalf: false,
    value: 4,
    color: "white",
    activeColor: "yellow",
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  };
  return (
    // create  carte 
    <div>
    
    <Card style={{ width: '50rem', border:'none',borderRadius: '15px',backgroundColor:'#9B2335',marginBottom:"30px",marginLeft:"200px",marginTop:"10px"}}>
    <Card.Img variant="top" src={element.imgsr} width={"500px"} height={"300px"} style={{marginTop:'20px'}}/>
    <Card.Body>
      <Card.Title >{element.name}</Card.Title>
      <Card.Text>
        Rate :
        <ReactStars {...thirdExample} />
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>

    </Card.Body>
    <br></br>
  </Card>
  
    </div>
  );
}

export default MovieCard;
