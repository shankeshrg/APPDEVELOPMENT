import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Chocolate Shake',
    price: '$25.99',
    imageSrc: 'https://s-media-cache-ak0.pinimg.com/736x/f3/b3/9e/f3b39e98919ba10337735fb83667cdfd--milkshake-recipes-drink-recipes.jpg',
  },
  {
    name: 'Tropial Protein Shake',
    price: '$19.99',
    imageSrc: 'https://i.pinimg.com/originals/05/a1/ff/05a1ffec7730edd163aedef0cedeba38.jpg',
  },
  {
    name: 'Strawberry Shake',
    price: '$19.99',
    imageSrc: 'https://i.pinimg.com/originals/24/c6/e7/24c6e76e72981d2f3c355ea4f8bf0f95.jpg',
  },
  {
    name: 'Caramel Shake',
    price: '$19.99',
    imageSrc: 'https://www.krazykitchenmom.com/wp-content/uploads/2017/07/Salted-Caramel-Milk-Shake-B.jpg',
  },{
    name: 'Majoon',
    price: '$19.99',
    imageSrc: 'https://static.toiimg.com/thumb/msid-53810627,width-1070,height-580,resizemode-75/53810627,pt-32,y_pad-40/53810627.jpg',
  },{
    name: 'Oreo Mint Shake',
    price: '$19.99',
    imageSrc: 'http://eastendtaste.com/wp-content/uploads/2016/03/OREO-COOKIE-MINT-SHAKE.jpg',
  },
  // Add more products here
];

function ProductList() {
  return (
    <div>
    <header>
        <h1>E-Restaurant </h1>
    </header>
    
     <aside class="sidebar">
     <nav>
         <ul>
         <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/order">Orders</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/shake">Shakes</Link></li>
                <li><a href="#">Settings</a></li>
         </ul>
     </nav>
</aside>
     
<div className="transparent-container">
    <div className="container">
      <h1 className="title">Product List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imageSrc} alt={product.name} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-features">{product.features}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
 
 
 </div>
  );
}

export default ProductList;