import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdnmedia.webthethao.vn/uploads/2021-06-10/LeBron-James-no6-jersey-swap-1.jpeg",
      age: 46,
      note: "LeBron James sẽ đổi số áo, quyết theo đuổi con số ưa thích từ thời Miami Heat",
    },
  ]);

  return (
    <div className="App">
      <List people={people} />
    </div>
  );
}

export default App;
