import { useState } from 'react';
import { Eye, EyeOff, Package, ChevronDown } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    phoneNumber: '',
    email: '',
    password: '',
    gstNumber: '',
    panNumber: '',
    referralCode: '',
    termsAccepted: false,
    smsConsent: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Account creation submitted:', formData);
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

      {/* Right Section - Create Account Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-12 overflow-y-auto">
        <div className="max-w-md w-full py-8">
          {/* Page Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            New Customer
          </h2>

          {/* Form */}
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Phone Number with Country Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
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
            </div>

            {/* User Document Section */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                User Document
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* GST Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GST Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="GST Number"
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* PAN Card Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PAN Card <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PAN Number"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>

            {/* Referral Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referral Code
              </label>
              <input
                type="text"
                placeholder="Enter referral code (if any)"
                value={formData.referralCode}
                onChange={(e) => handleInputChange('referralCode', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.termsAccepted}
                onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                className="mt-1 w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 leading-snug">
                I accept the <button className="text-green-500 hover:underline">Terms & Conditions</button> and <button className="text-green-500 hover:underline">Privacy Policy</button>
              </label>
            </div>

            {/* SMS Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="sms"
                checked={formData.smsConsent}
                onChange={(e) => handleInputChange('smsConsent', e.target.checked)}
                className="mt-1 w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="sms" className="text-sm text-gray-700 leading-snug">
                I consent to receive SMS/OTP for account verification and updates
              </label>
            </div>

            {/* OTP Note */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold">Note:</span> An OTP will be sent to your registered phone number for verification purposes. Standard SMS charges may apply. We may also send you updates about your orders and account.
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-6"
            >
              CREATE AN ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}