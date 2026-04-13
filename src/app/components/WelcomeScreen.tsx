import { motion } from "motion/react";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="text-white mb-3" style={{ fontSize: '48px', fontWeight: 700 }}>
          Swiftly
        </h1>
        <p className="text-white/90 mb-12" style={{ fontSize: '18px' }}>
          Fast. Reliable. Professional.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onGetStarted}
          className="bg-white text-[#667eea] px-12 py-4 rounded-xl shadow-lg"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
