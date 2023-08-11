import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor','Alomgir','Salman','Shakib']
  const products=[
    {name: 'Photoshop',price:'$99.99'},
    {name: 'Illustrator',price:'$79.99'},
    {name: 'PDF Reader',price:'$9.99'},
    {name: 'Adobe premier pro',price:'$12.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd=> <Product product={pd}></Product>)
        }
        <Person Nayok="Rubel" Nayika="Mousumi"></Person>
        <Person Nayok="Jasim" Nayika="Shabana"></Person>
        <Person Nayok="Bapparaz" Nayika="Cheka khawa mal"></Person>
        <Person Nayok="Manna" Nayika="Purnima"></Person>
      </header>
    </div>
  );
}


function Counter(){
  const [count, setCount]=useState(0);
  const handleIncrease = ()=>{
    setCount(count+1);
  }
  const handleDecrease = ()=>{
    setCount(count-1);
  }
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onMouseMove={handleDecrease}>Deccrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>{
      setUsers(data)
    })
  },[])

  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(probs){
    const productStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price}=probs.product   
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(probs){
  var style={
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={style}>
      <h1>Nayok: {probs.Nayok}</h1>
      <h3>Hero of {probs.Nayika}</h3>
    </div>
  )
}

export default App;
