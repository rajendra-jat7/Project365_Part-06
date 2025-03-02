import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const InvoiceForm = ({ setInvoiceData }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientAddress: "",
    clientContact: "",
    items: [{ description: "", quantity: 1, price: 0 }],
  });

  // Handle Input Change
  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedItems = [...formData.items];
      updatedItems[index][name] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add New Item
  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  // Remove Item
  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="invoice-form">
      <h2>📝 Create Invoice</h2>

      {/* Client Details */}
      <label>
        Client Name:
        <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required />
      </label>

      <label>
        Address:
        <input type="text" name="clientAddress" value={formData.clientAddress} onChange={handleChange} required />
      </label>

      <label>
        Contact:
        <input type="text" name="clientContact" value={formData.clientContact} onChange={handleChange} required />
      </label>

      {/* Item List */}
      <h3>🛒 Items</h3>
      {formData.items.map((item, index) => (
        <div key={index} className="item-row">
          <input
            type="text"
            name="description"
            placeholder="Item Description"
            value={item.description}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={item.quantity}
            min="1"
            onChange={(e) => handleChange(e, index)}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={item.price}
            min="0"
            onChange={(e) => handleChange(e, index)}
            required
          />
          {index > 0 && (
            <button type="button" className="remove-btn" onClick={() => removeItem(index)}>❌</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addItem} className="add-btn">➕ Add Item</button>

      <button type="submit" className="submit-btn">Generate Invoice</button>
    </form>
  );
};

InvoiceForm.propTypes = {
  setInvoiceData: PropTypes.func.isRequired,
};

export default InvoiceForm;
