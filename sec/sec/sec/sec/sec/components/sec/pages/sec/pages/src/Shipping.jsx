import { useState } from 'react';

function Shipping() {
  const [form, setForm] = useState({ from: '', to: '', weight: '' });
  const [rate, setRate] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculate = e => {
    e.preventDefault();
    // Mock rate calculation: $5 base + $0.5 per lb
    const weight = parseFloat(form.weight);
    if (!form.from || !form.to || isNaN(weight) || weight <= 0) {
      setRate('Please fill out all fields correctly.');
    } else {
      setRate(`Estimated Rate: $${(5 + 0.5 * weight).toFixed(2)}`);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Create a Shipment</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleCalculate}>
        <input
          type="text"
          name="from"
          placeholder="From (City, State)"
          className="border p-2 rounded"
          value={form.from}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to"
          placeholder="To (City, State)"
          className="border p-2 rounded"
          value={form.to}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (lbs)"
          className="border p-2 rounded"
          value={form.weight}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate Rate</button>
      </form>
      {rate && (
        <div className="bg-white shadow rounded p-4 mt-6">
          <p className="text-blue-700 font-semibold">{rate}</p>
        </div>
      )}
    </section>
  );
}

export default Shipping;
