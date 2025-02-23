import { useState } from "react";
import InputField from "./components/field/InputField";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <InputField label="نام" value={name} onChange={(e) => setName(e.target.value)} />
      <p className="mt-2">مقدار وارد شده: {name}</p>
    </div>
  );
}

export default App;
