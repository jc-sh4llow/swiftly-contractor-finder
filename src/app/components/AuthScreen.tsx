import { useState } from "react";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";

interface AuthScreenProps {
  onLogin: () => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-[#333333] mb-2" style={{ fontSize: '32px', fontWeight: 700 }}>
          Welcome to Swiftly
        </h1>
        <p className="text-[#6c757d]">
          Connect with verified contractors
        </p>
      </div>

      <div className="flex border-b border-[#f8f9fa]">
        <button
          onClick={() => setMode('login')}
          className={`flex-1 py-4 relative ${mode === 'login' ? 'text-[#667eea]' : 'text-[#6c757d]'}`}
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          Login
          {mode === 'login' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
            />
          )}
        </button>
        <button
          onClick={() => setMode('register')}
          className={`flex-1 py-4 relative ${mode === 'register' ? 'text-[#667eea]' : 'text-[#6c757d]'}`}
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          Register
          {mode === 'register' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
            />
          )}
        </button>
      </div>

      <div className="flex-1 px-6 pt-8">
        {mode === 'login' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-[#333333] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#f8f9fa] border border-transparent rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#333333] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-[#f8f9fa] border border-transparent rounded-xl pl-12 pr-12 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6c757d]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              onClick={onLogin}
              className="w-full text-white py-4 rounded-xl shadow-lg mt-6"
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '16px', fontWeight: 600 }}
            >
              Login
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#f8f9fa]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#6c757d]">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#f8f9fa] py-3 rounded-xl">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">G</div>
                <span className="text-[#333333]">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#f8f9fa] py-3 rounded-xl">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs"></div>
                <span className="text-[#333333]">Apple</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-[#333333] mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-[#f8f9fa] border border-transparent rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#333333] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#f8f9fa] border border-transparent rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#333333] mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-[#f8f9fa] border border-transparent rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#333333] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full bg-[#f8f9fa] border border-transparent rounded-xl pl-12 pr-12 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6c757d]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              onClick={onLogin}
              className="w-full text-white py-4 rounded-xl shadow-lg mt-6"
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '16px', fontWeight: 600 }}
            >
              Create Account
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#f8f9fa]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#6c757d]">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#f8f9fa] py-3 rounded-xl">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">G</div>
                <span className="text-[#333333]">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#f8f9fa] py-3 rounded-xl">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs"></div>
                <span className="text-[#333333]">Apple</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
