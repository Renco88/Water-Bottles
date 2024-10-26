import { useEffect, useState } from "react";
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { addToLS } from "../../Utilities/Localstrage";


const Bottles = () => {
  const [bottles, setbottles] = useState([]);
  const [cart,setcart] = useState([]);

  useEffect(() =>{
    fetch('bottles.json')
      .then(res => res.json())
      .then(data => setbottles(data))
  }, [])
  
  

  const handleAddToCart = bottle => {
    const newCart =[...cart,bottle];
    setcart(newCart);
    addToLS(bottle.id)
  }
  return (
    <div>
      <h2>Bottles Available: {bottles.length} </h2>
     <h4>Cart: {cart.length}</h4>
     <div className="bottle-container">
     {
        bottles.map(bottle => <Bottle
            handleAddToCart = {handleAddToCart}
        key = {bottle.id}
        bottle ={bottle}
        ></Bottle>)
      }
     </div>
  
    </div>
  );
};

export default Bottles;
