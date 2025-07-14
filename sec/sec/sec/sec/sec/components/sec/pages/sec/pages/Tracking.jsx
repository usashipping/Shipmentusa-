import { useState } from 'react';

const mockTrackingData = {
  '123456789': {
    status: 'In Transit',
    lastLocation: 'Los Angeles, CA',
    estimatedDelivery: '2025-07-16',
    history: [
      { date: '2025-07-13', location: 'San Francisco, CA', status: 'Shipped' },
      { date: '2025-07-14', location: 'Los Angeles, CA', status: 'In Transit' }
    ]
  },
  '987654321': {
    status: 'Delivered',
    lastLocation: 'New York, NY',
    estimatedDelivery: '2025-07-12',
    history: [
      { date: '2025-07-10', location: 'Chicago, IL', status: 'Shipped' },
      { date: '2025-07-12', location: 'New York, NY', status: 'Delivered' }
    ]
  }
};

function Tracking() {
  const [trackingNo, setTrackingNo] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (mockTrackingData[trackingNo]) {
      setResult(mockTrackingData[trackingNo]);
      setError('');
    } else {
      setResult(null);
      setError('Tracking number not found.');
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Track Your Shipment</h1>
      <form onSubmit={handleTrack} className="flex flex-col space-y-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter tracking number"
          value={trackingNo}
          onChange={e => setTrackingNo(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Track</button>
      </form>
      {error && (
        <p className="text-red-600 mt-4">{error}</p>
      )}
      {result && (
        <div className="bg-white shadow rounded p-4 mt-6">
          <h2 className="text-xl font-semibold mb-2">Status: {result.status}</h2>
          <p><strong>Last Location:</strong> {result.lastLocation}</p>
          <p><strong>Estimated Delivery:</strong> {result.estimatedDelivery}</p>
          <div className="mt-4">
            <h3 className="font-bold mb-1">History</h3>
            <ul className="text-sm">
              {result.history.map((h, i) => (
                <li key={i}>
                  <span className="font-medium">{h.date}</span> – {h.location} – {h.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Tracking;
