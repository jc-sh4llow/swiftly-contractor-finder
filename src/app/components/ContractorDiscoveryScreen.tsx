import { useState } from "react";
import { ArrowLeft, Star, Clock, MapPin, SlidersHorizontal, List, Map } from "lucide-react";
import { motion } from "motion/react";

const contractors = [
  {
    id: 1,
    name: 'Carlos Reyes',
    business: 'Reyes Plumbing Services',
    rating: 4.9,
    reviews: 152,
    specialty: 'Plumbing',
    responseTime: '< 1 hour',
    distance: '3.7 km',
    available: true,
    hourlyRate: '₱400-600'
  },
  {
    id: 2,
    name: 'Maria Santos',
    business: 'Santos Electrical Works',
    rating: 4.8,
    reviews: 98,
    specialty: 'Electrical',
    responseTime: '< 2 hours',
    distance: '5.0 km',
    available: true,
    hourlyRate: '₱450-700'
  },
  {
    id: 3,
    name: 'Jose Lim',
    business: 'Lim HVAC Solutions',
    rating: 5.0,
    reviews: 203,
    specialty: 'HVAC',
    responseTime: '< 30 min',
    distance: '2.9 km',
    available: false,
    hourlyRate: '₱500-800'
  },
  {
    id: 4,
    name: 'Ana Cruz',
    business: 'Cruz Home Repairs',
    rating: 4.7,
    reviews: 76,
    specialty: 'Renovation',
    responseTime: '< 3 hours',
    distance: '6.8 km',
    available: true,
    hourlyRate: '₱350-550'
  },
];

interface ContractorDiscoveryScreenProps {
  onBack: () => void;
  onSelectContractor: (contractorId: number) => void;
}

export function ContractorDiscoveryScreen({ onBack, onSelectContractor }: ContractorDiscoveryScreenProps) {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack}>
            <ArrowLeft className="text-[#333333]" size={24} />
          </button>
          <div className="flex-1">
            <h1 className="text-[#333333]" style={{ fontSize: '24px', fontWeight: 700 }}>
              Find Contractors
            </h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
              className="p-2 bg-[#f8f9fa] rounded-xl"
            >
              {viewMode === 'list' ? <Map size={20} className="text-[#667eea]" /> : <List size={20} className="text-[#667eea]" />}
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 bg-[#f8f9fa] rounded-xl"
            >
              <SlidersHorizontal size={20} className="text-[#667eea]" />
            </button>
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-4 bg-[#f8f9fa] rounded-xl p-4 space-y-3"
          >
            <div>
              <label className="text-[#333333] text-sm mb-2 block">Minimum Rating</label>
              <select className="w-full bg-white border border-transparent rounded-lg px-3 py-2 focus:outline-none focus:border-[#667eea]">
                <option>Any Rating</option>
                <option>4.5+</option>
                <option>4.0+</option>
              </select>
            </div>
            <div>
              <label className="text-[#333333] text-sm mb-2 block">Availability</label>
              <select className="w-full bg-white border border-transparent rounded-lg px-3 py-2 focus:outline-none focus:border-[#667eea]">
                <option>All</option>
                <option>Available Now</option>
                <option>Available This Week</option>
              </select>
            </div>
            <div>
              <label className="text-[#333333] text-sm mb-2 block">Sort By</label>
              <select className="w-full bg-white border border-transparent rounded-lg px-3 py-2 focus:outline-none focus:border-[#667eea]">
                <option>Highest Rated</option>
                <option>Fastest Response</option>
                <option>Closest Distance</option>
              </select>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex-1 overflow-auto px-6 pb-24">
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {contractors.map((contractor, index) => (
              <motion.div
                key={contractor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelectContractor(contractor.id)}
                className="bg-[#f8f9fa] rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '20px', fontWeight: 700 }}
                  >
                    {contractor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="text-[#333333]" style={{ fontSize: '16px', fontWeight: 600 }}>
                          {contractor.name}
                        </h3>
                        <p className="text-[#6c757d] text-sm">{contractor.business}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${contractor.available ? 'bg-[#28a745]' : 'bg-[#6c757d]'} text-white`}>
                        {contractor.available ? 'Available' : 'Busy'}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="text-[#ffc107] fill-[#ffc107]" size={14} />
                        <span className="text-[#333333]" style={{ fontWeight: 600 }}>{contractor.rating}</span>
                        <span className="text-[#6c757d]">({contractor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#6c757d]">
                        <Clock size={14} />
                        <span>{contractor.responseTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#6c757d] text-sm">
                        <MapPin size={14} />
                        <span>{contractor.distance}</span>
                      </div>
                      <span className="text-[#667eea] text-sm" style={{ fontWeight: 600 }}>
                        {contractor.hourlyRate}/hr
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="h-full bg-[#f8f9fa] rounded-2xl flex items-center justify-center text-[#6c757d]">
            Map View Placeholder
          </div>
        )}
      </div>
    </div>
  );
}
