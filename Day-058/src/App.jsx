import { useState } from "react";
import Form from "./components/Form";
import AadhaarCard from "./components/AadharCard";
import "./App.css"

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className="container">
      <h1>Aadhaar Card Generator</h1>
      {!formData ? (
        <Form setFormData={setFormData} />
      ) : (
        <AadhaarCard {...formData} />
      )}
    </div>
  );
};

export default App;
