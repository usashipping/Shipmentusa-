function Contact() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h1>
      <div className="bg-white shadow rounded p-6">
        <p className="mb-2">For questions or support, reach us at:</p>
        <ul className="mb-4">
          <li>Email: <a href="mailto:support@shipmentsusa.com" className="text-blue-700">support@shipmentsusa.com</a></li>
          <li>Phone: <a href="tel:18001234567" className="text-blue-700">1-800-123-4567</a></li>
        </ul>
        <p>Or fill out our <a className="text-blue-700 underline" href="#">support form</a>.</p>
      </div>
    </section>
  );
}

export default Contact;
