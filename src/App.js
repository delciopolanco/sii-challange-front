import "./App.css";
import "./i18n";
import { Form } from "./features/Form/Form";

function App() {
  const handleSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen">
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
