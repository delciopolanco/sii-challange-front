import "./App.css";
import "./i18n";
import { Card } from "./features/Card/Card";
import { Form } from "./features/Form/Form";

function App() {
  const handleSubmit = (data) => console.log(data);

  return (
    <div className="grid h-screen place-items-center relative">
      <Card></Card>
      <Form handleSubmit={handleSubmit}></Form>
    </div>
  );
}

export default App;
