import { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    // Demo: any username/password accepted
    if (form.username && form.password) {
      setMessage('Logged in (demo only, no real authentication)');
    } else {
      setMessage('Please enter username and password.');
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Customer Login</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 rounded"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
      </form>
      {message && (
        <div className="bg-white shadow rounded p-4 mt-6">
          <p className="text-blue-700 font-semibold">{message}</p>
        </div>
      )}
    </section>
  );
}

export default Login;
