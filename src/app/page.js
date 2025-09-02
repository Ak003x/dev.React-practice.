import './site/index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: '/pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: '/pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: '/pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Piza unghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: '/pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salmino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: '/pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: '/pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const Header = () => {
  return (
    <header className="header">
      <h1>Pizza store</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas =[];
  const numPizzas = pizzas.length;



  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ?
        <>
          {/* fragments */}
          <p>Hello</p>
          <ul className="pizzas">
            {/* //ternary operator..^^ */}
            {pizzaData.map(pizza => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}

          </ul>
        </>
        : <p>We are Working on the Menu.....</p>}


      {/* <Pizza
        name="pizza spinac"
        ingredients="Tomato"
        photoName="/pizzas/focaccia.jpg"
        price={10}
        />
        <Pizza
        name="pizza spinac0"
        ingredients="Tomato0"
        photoName="/pizzas/focaccia.jpg"
        price={20}
        /> */}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  //   const style = { color: "red", fontSixze: "20px", textDecoration: "underline" };
  // if (pizzaObj.soldOut) return null; 
  // to hide the sellout pizza

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" :""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <h1>{pizzaObj.ingredients}</h1>
        <span >{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  // const hour = new Date().getHours();
  const hour = 15; // Setting to 15 to show "We are Open" message
  const openHour = 12; // Opening at 10 AM
  const closeHour = 24; // Closing at midnight
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(!isOpen) return <p>Closed</p>; to return something from component
  return (
    <footer className="footer">
      {isOpen ? (<Order end={closeHour} start={openHour} />
      ) : <p>Welcome u to the store</p>}
    </footer>
  );
};


const Order = ({ end, start }) => {
  return (
    <div className="order">
      <p>We are Open until {end} garb fast! and start {start}</p>
      <button className="btn">order</button>
    </div>
  )
}

export default function Homepage() {
  return (
    <section>
      <div className="container ">
        <Header />
        <Menu />
        <Footer />
      </div>
    </section>
  );
}
