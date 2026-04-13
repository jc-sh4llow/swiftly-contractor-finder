import { CheckCircle, Home as HomeIcon } from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface SuccessScreenProps {
  title: string;
  message: string;
  onContinue: () => void;
}

export function SuccessScreen({ title, message, onContinue }: SuccessScreenProps) {
  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#667eea', '#764ba2', '#28a745']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#667eea', '#764ba2', '#28a745']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="h-full bg-white flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <CheckCircle className="text-white" size={56} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#333333] text-center mb-3"
        style={{ fontSize: '28px', fontWeight: 700 }}
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-[#6c757d] text-center mb-8"
      >
        {message}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="w-full text-white py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '16px', fontWeight: 600 }}
      >
        <HomeIcon size={20} />
        Back to Home
      </motion.button>
    </div>
  );
}
