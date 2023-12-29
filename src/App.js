import "./App.css";
import "./i18n";
import { Form } from "./features/Form/Form";
import { List } from "./features/List/List";

function App() {
  const handleSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <Form handleSubmit={handleSubmit} />
      <List
        creditCards={[
          {
            id: 1,
            creditCardHolderName: "Fulano de Tal",
            creditcardNumber: "1234123412343432",
            creditcardExpireDate: "12/24",
          },
          {
            id: 2,
            creditCardHolderName: "Fulano de Tal",
            creditcardNumber: "1234123412343432",
            creditcardExpireDate: "12/25",
          },
        ]}
      />
    </div>
  );
}

export default App;
