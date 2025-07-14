import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to shipmentsusa</h1>
        <p className="text-lg mb-6">Fast, reliable shipping and tracking for all your needs across the USA and worldwide.</p>
        <Link to="/tracking">
          <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition">Track a Package</button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="shadow bg-white p-6 rounded">
            <h2 className="font-bold text-blue-700 mb-2">Track</h2>
            <p>Enter your tracking number and get real-time updates on your shipment.</p>
          </div>
          <div className="shadow bg-white p-6 rounded">
            <h2 className="font-bold text-blue-700 mb-2">Ship</h2>
            <p>Start a new shipment and find the best rates for your deliveries.</p>
          </div>
          <div className="shadow bg-white p-6 rounded">
            <h2 className="font-bold text-blue-700 mb-2">Support</h2>
            <p>Contact our customer support team for help and inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
