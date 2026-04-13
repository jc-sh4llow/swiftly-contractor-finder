import { useState } from "react";
import { ArrowLeft, Send, Paperclip, Camera, Image } from "lucide-react";
import { motion } from "motion/react";

const messages = [
  {
    id: 1,
    sender: 'contractor',
    text: 'Hi! I received your request for the kitchen sink repair. I can come take a look tomorrow morning.',
    timestamp: '10:30 AM',
    isRead: true
  },
  {
    id: 2,
    sender: 'user',
    text: 'That would be great! What time works for you?',
    timestamp: '10:32 AM',
    isRead: true
  },
  {
    id: 3,
    sender: 'contractor',
    text: 'How about 9 AM? I should be able to diagnose and fix the issue within 2 hours.',
    timestamp: '10:35 AM',
    isRead: true
  },
  {
    id: 4,
    sender: 'contractor',
    text: 'Also, could you send me a photo of the leak so I can bring the right parts?',
    timestamp: '10:35 AM',
    isRead: true
  },
  {
    id: 5,
    sender: 'user',
    text: 'Sure, let me take a photo now.',
    timestamp: '10:40 AM',
    isRead: true
  },
];

interface ChatScreenProps {
  contractorName: string;
  onBack: () => void;
}

export function ChatScreen({ contractorName, onBack }: ChatScreenProps) {
  const [messageText, setMessageText] = useState('');

  return (
    <div className="h-full bg-white flex flex-col">
      <div
        className="px-6 pt-12 pb-4 flex items-center gap-4"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <button onClick={onBack}>
          <ArrowLeft className="text-white" size={24} />
        </button>
        <div className="flex items-center gap-3 flex-1">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: 'rgba(255, 255, 255, 0.2)', fontSize: '14px', fontWeight: 700 }}
          >
            JS
          </div>
          <div>
            <h2 className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
              {contractorName}
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#28a745] rounded-full"></div>
              <span className="text-white/80 text-xs">Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-br-sm'
                    : 'bg-[#f8f9fa] text-[#333333] rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <p
                className={`text-xs text-[#6c757d] mt-1 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="flex items-center justify-center py-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#6c757d] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#6c757d] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#6c757d] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] px-6 py-4 border-t border-[#f8f9fa] bg-white">
        <div className="flex items-center gap-2 mb-3">
          <button className="p-2 bg-[#f8f9fa] rounded-xl text-[#667eea]">
            <Paperclip size={20} />
          </button>
          <button className="p-2 bg-[#f8f9fa] rounded-xl text-[#667eea]">
            <Camera size={20} />
          </button>
          <button className="p-2 bg-[#f8f9fa] rounded-xl text-[#667eea]">
            <Image size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-[#f8f9fa] rounded-xl px-4 py-3 focus:outline-none focus:border-[#667eea] border-2 border-transparent transition-colors"
          />
          <button
            className="p-3 rounded-xl text-white"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
