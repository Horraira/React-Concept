import Message from "./Message"
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Like from "./components/Like";
import Button from "./components/Button";
import { useState } from 'react';
import { GiClover } from "react-icons/gi";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

  return (
    <div>
      {alertVisible &&
        <Alert onClose={() => setAlertVisibility(false)}>
          <Message />
        </Alert>}
      <Button color="dark" text="Click Me" onClicked={() => setAlertVisibility(true)} />
      <GiClover size={50} color="green" />
      <Like onClick={() => console.log('Clicked')} />
      <ListGroup cities={cities} onSelectItem={(city) => console.log(city)} />
    </div>
  );
}

export default App
