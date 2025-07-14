import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-700 underline mt-4 inline-block">Go to Home</Link>
    </section>
  );
}

export default NotFound;
