import { Home, Building2, Store, Construction, Wrench, Zap, Snowflake, Hammer } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  { id: 'house', name: 'House', icon: Home, color: '#667eea' },
  { id: 'condo', name: 'Condo', icon: Building2, color: '#764ba2' },
  { id: 'commercial', name: 'Commercial', icon: Store, color: '#667eea' },
  { id: 'lot', name: 'Lot', icon: Construction, color: '#764ba2' },
  { id: 'plumbing', name: 'Plumbing', icon: Wrench, color: '#667eea' },
  { id: 'electrical', name: 'Electrical', icon: Zap, color: '#764ba2' },
  { id: 'hvac', name: 'HVAC', icon: Snowflake, color: '#667eea' },
  { id: 'renovation', name: 'Renovation', icon: Hammer, color: '#764ba2' },
];

interface CategoriesScreenProps {
  onSelectCategory: (categoryId: string) => void;
}

export function CategoriesScreen({ onSelectCategory }: CategoriesScreenProps) {
  return (
    <div className="h-full bg-white">
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-[#333333]" style={{ fontSize: '28px', fontWeight: 700 }}>
          Service Categories
        </h1>
        <p className="text-[#6c757d] mt-1">
          Select the type of service you need
        </p>
      </div>

      <div className="px-6 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category.id)}
              className="bg-[#f8f9fa] rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-[#667eea] border-2 border-transparent transition-all"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${category.color} 0%, #764ba2 100%)` }}
              >
                <category.icon className="text-white" size={32} />
              </div>
              <span className="text-[#333333]" style={{ fontSize: '16px', fontWeight: 600 }}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
