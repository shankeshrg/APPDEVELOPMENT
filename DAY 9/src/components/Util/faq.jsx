import React from 'react';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Food Ordering Website</h1>
      </header>
      <main className="main">
        <section className="menu">
          <h2>Menu</h2>
          {/* Add your menu items here */}
          <div className="menu-item">
            <h3>Item 1</h3>
            <p>Description of item 1.</p>
            <span>$10.99</span>
            <button>Add to Cart</button>
          </div>
          {/* Add more menu items */}
        </section>
        <section className="cart">
          <h2>Cart</h2>
          {/* Display items added to the cart here */}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Food Ordering Website</p>
      </footer>
    </div>
  );
}

export default App;
