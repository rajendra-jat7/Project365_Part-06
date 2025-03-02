import PropTypes from 'prop-types';
import { QRCodeCanvas } from 'qrcode.react';
import '../App.css';

const QRCodeDisplay = ({ aadhaarData, reset }) => {
  const qrData = JSON.stringify(aadhaarData);

  return (
    <div className='qr-container'>
      <h2>📄 Aadhaar QR Code</h2>

      <div className='aadhaar-info'>
        <p>
          <strong>Name:</strong> {aadhaarData.name}
        </p>
        <p>
          <strong>DOB:</strong> {aadhaarData.dob}
        </p>
        <p>
          <strong>Gender:</strong> {aadhaarData.gender}
        </p>
        <p>
          <strong>Aadhaar Number:</strong>{' '}
          {aadhaarData.aadhaarNumber.replace(/(\d{4})/g, '$1 ')}
        </p>
      </div>

      <div className='qr-box'>
        <QRCodeCanvas value={qrData} size={200} />
      </div>

      <button className='btn' onClick={reset}>
        🔄 Generate New QR
      </button>
    </div>
  );
};

QRCodeDisplay.propTypes = {
  aadhaarData: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};

export default QRCodeDisplay;
