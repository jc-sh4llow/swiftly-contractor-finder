import { Home, Grid3x3, FileText, MessageSquare, User } from "lucide-react";
import { motion } from "motion/react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'categories', icon: Grid3x3, label: 'Categories' },
  { id: 'jobs', icon: FileText, label: 'Requests' },
  { id: 'messages', icon: MessageSquare, label: 'Messages' },
  { id: 'profile', icon: User, label: 'Profile' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white border-t border-[#f8f9fa] safe-area-inset-bottom">
      <div className="flex items-center justify-around px-4 py-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 min-w-0 flex-1 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
                />
              )}
              <tab.icon
                size={24}
                className={isActive ? 'text-[#667eea]' : 'text-[#6c757d]'}
              />
              <span
                className={`text-xs ${isActive ? 'text-[#667eea]' : 'text-[#6c757d]'}`}
                style={{ fontWeight: isActive ? 600 : 400 }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
