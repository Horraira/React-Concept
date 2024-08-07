import Message from "./Message"
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["New York", "Tokyo", "Los Angeles", "Paris", "London"];

  return (
    <div>
      <Message />
      <ListGroup
        cities={cities} title="Cities"
        onSelectItem={(item: string) => console.log(item)} />
    </div>
  );
}

export default App
