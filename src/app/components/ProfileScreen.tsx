import { User, MapPin, Phone, Mail, Settings, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const menuItems = [
  { icon: Settings, label: 'Account Settings', color: '#667eea' },
  { icon: Bell, label: 'Notifications', color: '#667eea' },
  { icon: HelpCircle, label: 'Help & Support', color: '#667eea' },
  { icon: LogOut, label: 'Logout', color: '#dc3545' },
];

export function ProfileScreen() {
  return (
    <div className="h-full bg-white overflow-auto pb-24">
      <div
        className="px-6 pt-12 pb-8"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <h1 className="text-white mb-6" style={{ fontSize: '28px', fontWeight: 700 }}>
          Profile
        </h1>

        <div className="flex items-center gap-4">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white"
            style={{ background: 'rgba(255, 255, 255, 0.2)', fontSize: '32px', fontWeight: 700 }}
          >
            BM
          </div>
          <div className="flex-1">
            <h2 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: 700 }}>
              Benji Martinez
            </h2>
            <p className="text-white/80 text-sm">Member since 2024</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <h3 className="text-[#333333] mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
          Contact Information
        </h3>

        <div className="bg-[#f8f9fa] rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <Mail className="text-[#667eea]" size={20} />
            </div>
            <div>
              <p className="text-[#6c757d] text-xs">Email</p>
              <p className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 600 }}>
                benji.martinez@email.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <Phone className="text-[#667eea]" size={20} />
            </div>
            <div>
              <p className="text-[#6c757d] text-xs">Phone</p>
              <p className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 600 }}>
                +63 917 234 5678
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <MapPin className="text-[#667eea]" size={20} />
            </div>
            <div>
              <p className="text-[#6c757d] text-xs">Location</p>
              <p className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 600 }}>
                Makati City, Metro Manila
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <h3 className="text-[#333333] mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
          Settings
        </h3>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full bg-[#f8f9fa] rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <item.icon style={{ color: item.color }} size={20} />
                <span className="text-[#333333]" style={{ fontSize: '16px', fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
              <ChevronRight className="text-[#6c757d]" size={20} />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
