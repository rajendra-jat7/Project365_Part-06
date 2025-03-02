import { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import "./App.css";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  return (
    <div className="app-container">
      <h1>🧾 Invoice Generator</h1>
      {!invoiceData ? (
        <InvoiceForm setInvoiceData={setInvoiceData} />
      ) : (
        <InvoicePreview invoiceData={invoiceData} reset={() => setInvoiceData(null)} />
      )}
    </div>
  );
};

export default App;
