import React from 'react'

const FAQ = () => {
  return (
    <div>

<header>
        <nav class="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <h1>FAQ</h1>
    </header>

    <main>
        <section class="faq-section">
            <h2>How can I place an order?</h2>
            <p>
                You can place an order by visiting our website, selecting your desired items from the menu, and proceeding to the checkout page.
            </p>
        </section>

        <section class="faq-section">
            <h2>Do you offer delivery services?</h2>
            <p>
                Yes, we offer delivery services within our specified delivery area. You can check if your location is eligible for delivery during the checkout process.
            </p>
        </section>

        <section class="faq-section">
            <h2>What payment methods do you accept?</h2>
            <p>
                We accept credit card payments, debit card payments, and cash on delivery for your convenience.
            </p>
        </section>

        <section class="faq-section">
            <h2>How long does delivery take?</h2>
            <p>
                Delivery times may vary depending on your location and order volume. We strive to deliver your order as quickly as possible and will provide an estimated delivery time during the checkout process.
            </p>
        </section>

       

    </main>
    </div>
  )
}

export default FAQ