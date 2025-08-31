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

      {numPizzas > 0 ? <ul className="pizzas">
        {/* //ternary operator..^^ */}
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> : <p>We are Working on the Menu.....</p>}


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

const Pizza = akProps => {
  //   const style = { color: "red", fontSixze: "20px", textDecoration: "underline" };
if(akProps.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={akProps.pizzaObj.photoName} alt={akProps.pizzaObj.name} />
      <div>
        <h1>{akProps.pizzaObj.name}</h1>
        <h1>{akProps.pizzaObj.ingredients}</h1>
        <p>${akProps.pizzaObj.price}</p>
      </div>
    </li>
  );
};

const Footer = () => {
  // const hour = new Date().getHours();
  const hour = 15; // Setting to 15 to show "We are Open" message
  const openHour = 14; // Opening at 10 AM
  const closeHour = 24; // Closing at midnight
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(!isOpen) return <p>Closed</p>; to return something from component
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are Open until {closeHour} garb fast!</p>
          <button className="btn">order</button>
        </div>
      ) : <p>Welcome u to the store</p>}
    </footer>
  );
};

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
