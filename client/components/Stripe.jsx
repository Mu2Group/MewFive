import React, { useState, useEffect } from "react";

const Stripe = () => {

  // const handleCheckout = async () => {
  //   try {
  //     const userID = document.cookie.slice(document.cookie.indexOf('=') + 1)
  //     const res = await fetch(`/checkout/${userID}/payment`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         // body: JSON.stringify({quantity: qty}),
  //       })
  //     const data = await res.json()
  //     console.log({data})
  //   }
  //   catch (err) {
  //     console.log('Error in Stripe handleCheckout POST request: ', err)
  //   }
  // }

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/checkout/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );

}

export default Stripe;