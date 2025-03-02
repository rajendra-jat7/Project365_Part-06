import { useState } from 'react';
import AadhaarForm from './components/AadhaarForm';
import QRCodeDisplay from './components/QRCodeDisplay';
import './App.css';

const App = () => {
  const [aadhaarData, setAadhaarData] = useState(null);

  return (
    <div className='app-container'>
      <h1>🆔 Aadhaar QR Code Generator</h1>
      {!aadhaarData ? (
        <AadhaarForm setAadhaarData={setAadhaarData} />
      ) : (
        <QRCodeDisplay
          aadhaarData={aadhaarData}
          reset={() => setAadhaarData(null)}
        />
      )}
    </div>
  );
};

export default App;
