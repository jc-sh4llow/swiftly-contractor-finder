import { ArrowLeft, Star, CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    id: 1,
    user: 'Maria Santos',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Excellent service! Very professional and completed the job ahead of schedule.',
    initials: 'MS'
  },
  {
    id: 2,
    user: 'Juan Reyes',
    rating: 4.5,
    date: '1 month ago',
    comment: 'Great work on the plumbing repair. Would recommend.',
    initials: 'JR'
  },
];

const services = [
  { name: 'Emergency Repairs', price: '₱₱₱' },
  { name: 'Leak Detection', price: '₱₱' },
  { name: 'Pipe Installation', price: '₱₱₱' },
  { name: 'Drain Cleaning', price: '₱' },
];

interface ContractorDetailScreenProps {
  onBack: () => void;
}

export function ContractorDetailScreen({ onBack }: ContractorDetailScreenProps) {
  return (
    <div className="h-full bg-white overflow-auto">
      <div
        className="px-6 pt-12 pb-8"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <button onClick={onBack} className="mb-6">
          <ArrowLeft className="text-white" size={24} />
        </button>

        <div className="flex items-start gap-4">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shrink-0"
            style={{ background: 'rgba(255, 255, 255, 0.2)', fontSize: '28px', fontWeight: 700 }}
          >
            JS
          </div>
          <div className="flex-1">
            <h1 className="text-white mb-1" style={{ fontSize: '24px', fontWeight: 700 }}>
              John Smith
            </h1>
            <p className="text-white/90 mb-2">Smith Plumbing Co.</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <CheckCircle className="text-white" size={14} />
                <span className="text-white text-xs">Verified</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <CheckCircle className="text-white" size={14} />
                <span className="text-white text-xs">Licensed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 bg-white/10 rounded-2xl p-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="text-white fill-white" size={16} />
              <span className="text-white" style={{ fontSize: '18px', fontWeight: 700 }}>4.9</span>
            </div>
            <span className="text-white/80 text-xs">Rating</span>
          </div>
          <div className="text-center">
            <div className="text-white mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>152</div>
            <span className="text-white/80 text-xs">Jobs Done</span>
          </div>
          <div className="text-center">
            <div className="text-white mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>&lt;1h</div>
            <span className="text-white/80 text-xs">Response</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div>
          <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
            Services & Pricing
          </h2>
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between bg-[#f8f9fa] rounded-xl p-4">
                <span className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 500 }}>
                  {service.name}
                </span>
                <span className="text-[#667eea]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
            Reviews
          </h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#f8f9fa] rounded-2xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '14px', fontWeight: 600 }}
                  >
                    {review.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#333333]" style={{ fontSize: '14px', fontWeight: 600 }}>
                        {review.user}
                      </span>
                      <span className="text-[#6c757d] text-xs">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.floor(review.rating) ? 'text-[#ffc107] fill-[#ffc107]' : 'text-[#6c757d]'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6c757d] text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
            Contact
          </h2>
          <div className="bg-[#f8f9fa] rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="text-[#667eea]" size={20} />
              <span className="text-[#333333]" style={{ fontSize: '14px' }}>+63 912 345 6789</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#667eea]" size={20} />
              <span className="text-[#333333]" style={{ fontSize: '14px' }}>john@smithplumbing.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#667eea]" size={20} />
              <span className="text-[#333333]" style={{ fontSize: '14px' }}>Quezon City, Metro Manila</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] p-6 bg-white border-t border-[#f8f9fa]">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full text-white py-4 rounded-xl shadow-lg"
          style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '16px', fontWeight: 600 }}
        >
          Request Quote
        </motion.button>
      </div>
    </div>
  );
}
