import Message from "./Message"
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Like from "./components/Like";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState } from 'react';
import { GiClover } from "react-icons/gi";
import produce from "immer";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

  const [drinks, setDrinks] = useState({
    price: 135,
    name: "Coca Cola",
    ingredients: {
      sugar: 100,
      water: 200
    }
  });
  const updateDrink = () => {
    setDrinks({
      ...drinks,
      ingredients: {
        ...drinks.ingredients,
        sugar: drinks.ingredients.sugar + 10,
        water: drinks.ingredients.water + 17
      }
    });
  }

  const [tags, setTags] = useState(['Happy', 'Sad', 'Angry']);
  const handleTag = () => {
    // add
    setTags([...tags, 'New Tag']);
    // remove
    setTags(tags.filter(tag => tag !== 'Sad'));
    // update
    setTags(tags.map(tag => tag === 'Happy' ? 'Happy Tag' : tag));
  }

  const [bugs, setBugs] = useState([
    { id: 1, description: 'Bug 1', fixed: false },
    { id: 2, description: 'Bug 2', fixed: true },
    { id: 3, description: 'Bug 3', fixed: false }
  ]);
  const handleBug = () => {
    // update with spread operator
    // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug));

    // update with immer
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) {
        bug.fixed = true;
      }
    }));
  }

  const [cartItems, setCartItems] = useState(['item1', 'item2', 'item3']);
  const clearCart = () => {
    setCartItems([]);
  }

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
      score: 10,
    }
  });

  const updateGame = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: 'John Doe',
        score: game.player.score + 10
      }
    });
  }

  const [newCart, setNewCart] = useState({
    discount: 10,
    items: [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 }
    ]
  });

  const handleNewCart = () => {
    setNewCart({
      ...newCart,
      items: newCart.items.map(item => item.id === 2 ? { ...item, price: item.price + 50 } : item)
    });
  }

  return (
    <div>
      {alertVisible &&
        <Alert onClose={() => setAlertVisibility(false)}>
          <Message />
        </Alert>}
      <GiClover size={50} color="green" />
      <Like onClick={() => console.log('Clicked')} />
      <Button color="dark" text="Click Me" onClicked={() => setAlertVisibility(true)} /> <br />
      || {drinks.name} - {drinks.price} - {drinks.ingredients.sugar} - {drinks.ingredients.water}||<br />
      <Button color="dark" text="Update Drink" onClicked={updateDrink} /> <br />
      {tags.map(tag => <div key={tag}>{tag}</div>)} <br />
      <Button color="dark" text="Custom Tag" onClicked={handleTag} /> <br />
      {bugs.map(bug => <div key={bug.id}>{bug.description} - {bug.fixed ? 'Fixed' : 'Not Fixed'}</div>)}
      <Button color="dark" text="Handle Bug" onClicked={handleBug} /> <br />
      <ListGroup cities={cities} onSelectItem={(city) => console.log(city)} /> <br />
      <Navbar cartItemsCount={cartItems.length} /> <br />
      <Cart clearCart={clearCart} cartItems={cartItems} />
      {game.player.name} - {game.player.score}   :-
      <Button color="dark" text="Update Game" onClicked={updateGame} />
      {newCart.items.map(item => <div key={item.id}>{item.name} - {item.price}</div>)}
      <Button color="dark" text="Update Cart" onClicked={handleNewCart} />
    </div>
  );
}

export default App
