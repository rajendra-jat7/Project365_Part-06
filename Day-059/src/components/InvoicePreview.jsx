import PropTypes from "prop-types";
import "../App.css";

const InvoicePreview = ({ invoiceData, reset }) => {
  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="invoice-preview">
      <h2>📄 Invoice</h2>

      <p><strong>Client:</strong> {invoiceData.clientName}</p>
      <p><strong>Address:</strong> {invoiceData.clientAddress}</p>
      <p><strong>Contact:</strong> {invoiceData.clientContact}</p>

      <h3>📋 Items</h3>
      <ul>
        {invoiceData.items.map((item, index) => (
          <li key={index}>
            {item.description} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
          </li>
        ))}
      </ul>

      <h3>💰 Total: ₹{calculateTotal()}</h3>

      <button onClick={reset} className="reset-btn">🔄 Create New Invoice</button>
    </div>
  );
};

InvoicePreview.propTypes = {
  invoiceData: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};

export default InvoicePreview;
