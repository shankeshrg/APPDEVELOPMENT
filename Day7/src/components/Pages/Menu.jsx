import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const products = [
        {
          name: 'Lasagne alla Bolognese',
          price: '$25.99',
          imageSrc: 'https://assets.bonappetit.com/photos/57adf3c353e63daf11a4dfa2/master/pass/lasagna-bolognese.jpg',
        },
        {
          name: 'Grilled Chicken',
          price: '$19.99',
          imageSrc: 'https://media.istockphoto.com/id/496919860/photo/bbq-chicken-whole.jpg?s=612x612&w=0&k=20&c=CCoJhS4M6I1Vg-Tc5AjiqMEhxS0AFQIp90KpEvASaHU=',
        },
        {
          name: 'Fish shushi',
          price: '$19.99',
          imageSrc: 'https://d3py87e0zuixsk.cloudfront.net/production/wp-content/uploads/2023/07/13121425/3Tides-21.webp',
        },
        {
          name: 'Beef with Parotta',
          price: '$19.99',
          imageSrc: 'https://as2.ftcdn.net/v2/jpg/04/87/51/17/1000_F_487511720_bP3XSrMn9imliCY1f0CjimSxsRWgpewt.jpg',
        },{
          name: 'Chicken Briyani',
          price: '$19.99',
          imageSrc: 'https://static.wixstatic.com/media/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg',
        },{
          name: 'Naan',
          price: '$19.99',
          imageSrc: 'https://production-media.gousto.co.uk/cms/mood-image/2337---Paneer-Butter-Masala-With-Coriander-Naan12793-1645608840813.jpg',
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
    <Link to="/privacy">
    
    <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link>
      </div>
</Link>
        
    </footer>
    </div>
  )
}

export default Menu