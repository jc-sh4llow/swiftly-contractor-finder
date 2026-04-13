import { ArrowLeft, Star, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const responses = [
  {
    id: 1,
    contractor: 'John Smith',
    business: 'Smith Plumbing Co.',
    rating: 4.9,
    reviews: 152,
    amount: '$350',
    timeline: '1-2 days',
    proposal: 'I can fix the kitchen sink leak by replacing the damaged pipe section and sealing. I have the parts in stock and can start tomorrow.',
    responseTime: '15 min ago'
  },
  {
    id: 2,
    contractor: 'David Lee',
    business: 'Lee Plumbing Services',
    rating: 4.7,
    reviews: 89,
    amount: '$280',
    timeline: '2-3 days',
    proposal: 'Will diagnose the leak and provide repair. May need to order parts depending on the issue. Free diagnostic included.',
    responseTime: '1 hour ago'
  },
  {
    id: 3,
    contractor: 'Maria Garcia',
    business: 'Garcia Home Repairs',
    rating: 5.0,
    reviews: 124,
    amount: '$420',
    timeline: 'Same day',
    proposal: 'Emergency service available today. Will fix the leak and inspect all kitchen plumbing for potential issues. 1-year warranty included.',
    responseTime: '30 min ago'
  },
];

interface ResponseComparisonScreenProps {
  onBack: () => void;
}

export function ResponseComparisonScreen({ onBack }: ResponseComparisonScreenProps) {
  return (
    <div className="h-full bg-white overflow-auto">
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onBack}>
            <ArrowLeft className="text-[#333333]" size={24} />
          </button>
          <div className="flex-1">
            <h1 className="text-[#333333]" style={{ fontSize: '24px', fontWeight: 700 }}>
              Contractor Responses
            </h1>
            <p className="text-[#6c757d] text-sm">3 contractors responded</p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24 space-y-4">
        {responses.map((response, index) => (
          <motion.div
            key={response.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#f8f9fa] rounded-2xl p-5"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '18px', fontWeight: 700 }}
              >
                {response.contractor.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-[#333333] mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {response.contractor}
                </h3>
                <p className="text-[#6c757d] text-sm mb-2">{response.business}</p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="text-[#ffc107] fill-[#ffc107]" size={14} />
                    <span className="text-[#333333]" style={{ fontWeight: 600 }}>{response.rating}</span>
                    <span className="text-[#6c757d]">({response.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#6c757d]">
                    <Clock size={14} />
                    <span>{response.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-[#6c757d] text-xs mb-1">Proposed Amount</p>
                  <p className="text-[#333333]" style={{ fontSize: '24px', fontWeight: 700 }}>
                    {response.amount}
                  </p>
                </div>
                <div>
                  <p className="text-[#6c757d] text-xs mb-1">Timeline</p>
                  <p className="text-[#333333]" style={{ fontSize: '18px', fontWeight: 600 }}>
                    {response.timeline}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#6c757d] text-xs mb-2">Proposal Details</p>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {response.proposal}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-white border-2 border-[#667eea] text-[#667eea] py-3 rounded-xl hover:bg-[#667eea]/5 transition-colors">
                <span style={{ fontSize: '14px', fontWeight: 600 }}>View Profile</span>
              </button>
              <button
                className="flex-1 text-white py-3 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '14px', fontWeight: 600 }}
              >
                Select Contractor
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
