import "./site/index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Piza unghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salmino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/pizzas/prosciutto.jpg",
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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="">{pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)}</ul>

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

const Pizza = (props) => {
  //   const style = { color: "red", fontSixze: "20px", textDecoration: "underline" };
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <h1>{props.pizzaObj.ingredients}</h1>
        <p>${props.pizzaObj.price}</p>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are open 10am - 12pm
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
