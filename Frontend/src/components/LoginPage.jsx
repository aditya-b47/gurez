import { useState } from 'react';
import { Eye, EyeOff, Package } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Brand */}
      <div className="w-1/2 bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center p-12">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Package className="w-24 h-24 text-green-500" strokeWidth={1.5} />
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                G
              </div>
            </div>
          </div>
          
          {/* Brand Text */}
          <h1 className="text-4xl font-bold text-center text-gray-800 leading-tight">
            India's Best Online<br />
            <span className="text-green-500">Packaging Store</span>
          </h1>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Login To Your Account
          </h2>

          {/* Form */}
          <div className="space-y-6">
            {/* Email/Phone Input */}
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Links */}
            <div className="flex items-center justify-between text-sm">
              <button
                onClick={() => console.log('Forgot password clicked')}
                className="text-gray-600 hover:text-green-500 transition"
              >
                Forgot Password
              </button>
              <button
                onClick={() => console.log('Create account clicked')}
                className="text-gray-600 hover:text-green-500 transition"
              >
                Create An Account
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}