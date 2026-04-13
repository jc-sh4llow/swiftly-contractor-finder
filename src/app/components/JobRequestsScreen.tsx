import { useState } from "react";
import { Clock, CheckCircle, Circle } from "lucide-react";
import { motion } from "motion/react";

const jobRequests = [
  {
    id: 1,
    category: 'Plumbing',
    subcategory: 'Leak Repair',
    description: 'Kitchen sink is leaking under the cabinet...',
    urgency: 'high',
    budget: '₱800-₱1,500',
    date: '2 hours ago',
    status: 'waiting',
    responses: 0
  },
  {
    id: 2,
    category: 'Electrical',
    subcategory: 'Outlet Installation',
    description: 'Need 3 new outlets installed in living room...',
    urgency: 'medium',
    budget: '₱1,200-₱2,000',
    date: '1 day ago',
    status: 'responses',
    responses: 3
  },
  {
    id: 3,
    category: 'HVAC',
    subcategory: 'AC Repair',
    description: 'Air conditioning not cooling properly...',
    urgency: 'emergency',
    budget: '₱2,500-₱4,000',
    date: '3 days ago',
    status: 'in_progress',
    responses: 5
  },
];

const statusConfig = {
  waiting: { label: 'Waiting', icon: '🟡', color: '#ffc107' },
  responses: { label: 'Responses Received', icon: '🟢', color: '#28a745' },
  selected: { label: 'Contractor Selected', icon: '🔵', color: '#667eea' },
  in_progress: { label: 'In Progress', icon: '⚫', color: '#333333' },
  completed: { label: 'Completed', icon: '✓', color: '#28a745' },
};

const urgencyConfig = {
  low: { color: '#28a745', label: 'Low Priority' },
  medium: { color: '#ffc107', label: 'Medium' },
  high: { color: '#ff6b35', label: 'High Priority' },
  emergency: { color: '#dc3545', label: 'Emergency' },
};

export function JobRequestsScreen() {
  const [activeTab, setActiveTab] = useState<'active' | 'past' | 'drafts'>('active');

  return (
    <div className="h-full bg-white">
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-[#333333]" style={{ fontSize: '28px', fontWeight: 700 }}>
          Job Requests
        </h1>
        <p className="text-[#6c757d] mt-1">
          Track and manage your service requests
        </p>
      </div>

      <div className="flex border-b border-[#f8f9fa] px-6">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex-1 py-3 relative ${activeTab === 'active' ? 'text-[#667eea]' : 'text-[#6c757d]'}`}
          style={{ fontSize: '14px', fontWeight: 600 }}
        >
          Active
          {activeTab === 'active' && (
            <motion.div
              layoutId="jobTab"
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`flex-1 py-3 relative ${activeTab === 'past' ? 'text-[#667eea]' : 'text-[#6c757d]'}`}
          style={{ fontSize: '14px', fontWeight: 600 }}
        >
          Past Jobs
          {activeTab === 'past' && (
            <motion.div
              layoutId="jobTab"
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('drafts')}
          className={`flex-1 py-3 relative ${activeTab === 'drafts' ? 'text-[#667eea]' : 'text-[#6c757d]'}`}
          style={{ fontSize: '14px', fontWeight: 600 }}
        >
          Drafts
          {activeTab === 'drafts' && (
            <motion.div
              layoutId="jobTab"
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
            />
          )}
        </button>
      </div>

      <div className="px-6 py-6 space-y-4 overflow-auto pb-24">
        {jobRequests.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#f8f9fa] rounded-2xl p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-[#333333]" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {job.category} · {job.subcategory}
                </h3>
                <p className="text-[#6c757d] text-sm mt-1">{job.description}</p>
              </div>
              <div className="text-2xl">{statusConfig[job.status as keyof typeof statusConfig].icon}</div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mb-3">
              <div
                className="px-3 py-1 rounded-full text-xs text-white"
                style={{ backgroundColor: urgencyConfig[job.urgency as keyof typeof urgencyConfig].color }}
              >
                {urgencyConfig[job.urgency as keyof typeof urgencyConfig].label}
              </div>
              <span className="text-[#333333] text-sm" style={{ fontWeight: 600 }}>
                {job.budget}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#6c757d] text-sm">
                <Clock size={14} />
                <span>{job.date}</span>
              </div>
              <div className="text-[#667eea] text-sm" style={{ fontWeight: 600 }}>
                {job.responses > 0 ? `${job.responses} responses` : statusConfig[job.status as keyof typeof statusConfig].label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
