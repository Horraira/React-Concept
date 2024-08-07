import Message from "./Message"
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from 'react';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible &&
        <Alert onClose={() => setAlertVisibility(false)}>
          <Message />
        </Alert>}
      <Button color="dark" text="Click Me" onClicked={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App
