import "./App.css";
import "./i18n";
import { Form } from "./features/Form/Form";
import { List } from "./features/List/List";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="grid grid-rows-1 md:grid-cols-[1fr_2fr] p-3 gap-12 mt-20">
      <Form />
      <List page={page} onPageChange={(page) => setPage(page)} />
    </div>
  );
}

export default App;
