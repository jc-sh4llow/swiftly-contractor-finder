import { Search, MoreVertical } from "lucide-react";
import { motion } from "motion/react";

const conversations = [
  {
    id: 1,
    contractor: 'Carlos Reyes',
    business: 'Reyes Plumbing Services',
    lastMessage: 'I can start tomorrow morning at 9 AM',
    timestamp: '10 min ago',
    unread: 2,
    online: true
  },
  {
    id: 2,
    contractor: 'Maria Santos',
    business: 'Santos Electrical Works',
    lastMessage: 'Here are the photos you requested',
    timestamp: '2 hours ago',
    unread: 0,
    online: true
  },
  {
    id: 3,
    contractor: 'Jose Lim',
    business: 'Lim HVAC Solutions',
    lastMessage: 'The parts will arrive on Friday',
    timestamp: '1 day ago',
    unread: 0,
    online: false
  },
];

export function MessagesScreen() {
  return (
    <div className="h-full bg-white">
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-[#333333] mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
          Messages
        </h1>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c757d]" size={20} />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-[#f8f9fa] rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#667eea] border-2 border-transparent transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2 px-6 pb-24 overflow-auto">
        {conversations.map((conv, index) => (
          <motion.div
            key={conv.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-2xl"
          >
            <div className="relative">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '18px', fontWeight: 700 }}
              >
                {conv.contractor.split(' ').map(n => n[0]).join('')}
              </div>
              {conv.online && (
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#28a745] rounded-full border-2 border-white"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[#333333]" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {conv.contractor}
                </h3>
                <span className="text-[#6c757d] text-xs">{conv.timestamp}</span>
              </div>
              <p className="text-[#6c757d] text-sm mb-1">{conv.business}</p>
              <div className="flex items-center justify-between">
                <p className="text-[#6c757d] text-sm truncate">{conv.lastMessage}</p>
                {conv.unread > 0 && (
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ml-2"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '10px', fontWeight: 700 }}
                  >
                    {conv.unread}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
