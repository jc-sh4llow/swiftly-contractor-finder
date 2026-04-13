import { Search, TrendingUp, Star, Clock } from "lucide-react";
import { motion } from "motion/react";

const featuredContractors = [
  { id: 1, name: 'Carlos Reyes', business: 'Reyes Plumbing Services', rating: 4.9, specialty: 'Plumbing', responseTime: '< 1 hour', available: true },
  { id: 2, name: 'Maria Santos', business: 'Santos Electrical Works', rating: 4.8, specialty: 'Electrical', responseTime: '< 2 hours', available: true },
  { id: 3, name: 'Jose Lim', business: 'Lim HVAC Solutions', rating: 5.0, specialty: 'HVAC', responseTime: '< 30 min', available: false },
];

export function HomeScreen() {
  return (
    <div className="h-full bg-white overflow-auto pb-24">
      <div
        className="px-6 pt-12 pb-8"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <h1 className="text-white mb-2" style={{ fontSize: '28px', fontWeight: 700 }}>
          Find Contractors
        </h1>
        <p className="text-white/90 mb-6">
          Fast, reliable, professional service
        </p>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full bg-white rounded-xl pl-12 pr-4 py-4 focus:outline-none shadow-lg"
          />
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-[#667eea]" size={20} />
          <h2 className="text-[#333333]" style={{ fontSize: '20px', fontWeight: 700 }}>
            Featured Contractors
          </h2>
        </div>

        <div className="space-y-4">
          {featuredContractors.map((contractor, index) => (
            <motion.div
              key={contractor.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f8f9fa] rounded-2xl p-4"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '24px', fontWeight: 700 }}
                >
                  {contractor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#333333]" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {contractor.name}
                  </h3>
                  <p className="text-[#6c757d] text-sm mb-2">{contractor.business}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="text-[#ffc107] fill-[#ffc107]" size={14} />
                      <span className="text-[#333333]">{contractor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#6c757d]">
                      <Clock size={14} />
                      <span>{contractor.responseTime}</span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${contractor.available ? 'bg-[#28a745] text-white' : 'bg-[#6c757d] text-white'}`}>
                      {contractor.available ? 'Available' : 'Busy'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-[#f8f9fa] rounded-xl p-4 text-left">
            <div className="text-[#667eea] mb-2" style={{ fontSize: '24px' }}>📝</div>
            <div className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 600 }}>New Request</div>
          </button>
          <button className="bg-[#f8f9fa] rounded-xl p-4 text-left">
            <div className="text-[#667eea] mb-2" style={{ fontSize: '24px' }}>💬</div>
            <div className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 600 }}>Messages</div>
          </button>
        </div>
      </div>
    </div>
  );
}
