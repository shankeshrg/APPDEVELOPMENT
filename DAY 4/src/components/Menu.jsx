import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Malabar Biriyani',
    price: '$25.99',
    imageSrc: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-10/biryani.jpg',
  },
  {
    name: 'Lobster',
    price: '$19.99',
    imageSrc: 'https://howtocookmeat.com/wp-content/uploads/2018/05/header-72.jpg',
  },
  {
    name: 'Pasta',
    price: '$19.99',
    imageSrc: 'http://jonoandjules.files.wordpress.com/2011/12/blue-cheese-pasta.jpg',
  },
  {
    name: 'Infused Chicken',
    price: '$19.99',
    imageSrc: 'https://video-images.vice.com/articles/58ad9048b6582ebe225a8620/lede/1555344047832-chicken-pot-butter-recipe.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDI3eGg7MHh3LDAuMDQ0NXhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg',
  },{
    name: 'Double deck Burgers',
    price: '$19.99',
    imageSrc: 'https://assets.graydientcreative.com/files/outlets/marcus-restaurants/photo-gallery/55912ab1-df0e-4cd2-a879-a40a00947f1b/double-decker-burger.jpg',
  },{
    name: 'Wheat Paratha',
    price: '$19.99',
    imageSrc: 'https://thumbs.dreamstime.com/b/indian-paratha-meat-curry-spicy-tasty-flat-bread-mutton-79559434.jpg',
  },
  // Add more products here
];

function ProductList() {
  return (
    <div>
    <header>
        <h1>E-Restaurant </h1>
m
    </header>
    
     <aside class="sidebar">
     <nav>
         <ul>
         <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/order">Orders</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><a href="#">Reservations</a></li>
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
 
 <footer>
     <p>&copy; 2023 E-Restaurant</p>
 </footer>
 </div>
  );
}

export default ProductList;