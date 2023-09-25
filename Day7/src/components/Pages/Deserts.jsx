import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const products = [
        {
          name: 'Tiramasu',
          price: '$25.99',
          imageSrc: 'https://www.elmundoeats.com/wp-content/uploads/2020/12/FP-10-Minute-Eggless-Tiramisu-For-Two-2.jpg',
        },
        {
          name: 'Cheese Cake',
          price: '$30.00',
          imageSrc: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Caramel-Praline-Topped-Cheesecake_exps34790_COD2043879A07_08_1bC_RMS.jpg',
        },
        {
          name: 'Brownie',
          price: '$20.00',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9fqEJOx1LJdkOrLRI2BZ3ccfJ560EJDncCUcEGurYMUYfbvLzPisUFnIXCqaBBnMffg&usqp=CAU',
        },
        {
          name: 'Apple Pie',
          price: '$19.99',
          imageSrc: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/apple-pie-2.jpg',
        },{
          name: 'Turkish Delight',
          price: '$25.00',

          imageSrc: 'https://www.littlegreenworkshops.com.au/wp-content/uploads/2021/04/Turkish-Delight.jpeg',
        },{
          name: 'Oreo Milkshake',
          price: '$40.00',
          imageSrc: 'https://thegirlinspired.com/wp-content/uploads/2023/02/HR-Spiked-Milkshake-with-Oreos-17.jpg',
        },
        // Add more products here
      ];
  return (
    <div>

<header>
        <h1>E-Restaurant Dashboard</h1>
    </header>
    <aside class="sidebar">
        <nav>
            <ul>
                <br/><br/><br/><br/><br/>
                <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/order">Orders</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/desert">Deserts</Link></li>
               
            </ul>
        </nav>
    </aside>
    <div className="transparent-container">
    
      
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.imageSrc} alt={product.name} />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <p className="product-features">{product.features}</p>
          <button class="cart-button">
  <span class="add-to-cart">Add to cart</span>
  <span class="added">Added</span>
  <i class="fas fa-shopping-cart"></i>
  <i class="fas fa-box"></i>
</button>
        </div>
      ))}
    </div>
  
</div>

    <script src="script.js"></script>
    <footer>
    <div class="footer">2023 E-Restaurant</div>
    
    
    <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link>
      </div>

        
    </footer>
    </div>
  )
}

export default Menu