import { useState } from "react";
import { ArrowLeft, Upload, MapPin } from "lucide-react";
import { motion } from "motion/react";

const steps = ['Category', 'Details', 'Urgency', 'Budget', 'Location'];

const subcategories = {
  plumbing: ['Leak Repair', 'Drain Cleaning', 'Pipe Installation', 'Water Heater', 'Fixture Replacement'],
  electrical: ['Outlet Installation', 'Light Fixtures', 'Panel Upgrade', 'Wiring', 'Troubleshooting'],
};

const urgencyLevels = [
  { id: 'low', label: 'Low Priority', color: '#28a745', description: 'Can wait a week or more' },
  { id: 'medium', label: 'Medium', color: '#ffc107', description: 'Within a few days' },
  { id: 'high', label: 'High Priority', color: '#ff6b35', description: 'Within 24 hours' },
  { id: 'emergency', label: 'Emergency', color: '#dc3545', description: 'Immediate attention needed' },
];

const budgetRanges = [
  { id: 'budget1', label: '500 - 1,000' },
  { id: 'budget2', label: '1,000 - 2,000' },
  { id: 'budget3', label: '2,000 - 3,500' },
  { id: 'budget4', label: '3,500 - 5,000' },
  { id: 'budget5', label: '5,000+' },
];

interface ProblemDescriptionScreenProps {
  categoryId: string;
  onBack: () => void;
  onSubmit: () => void;
}

export function ProblemDescriptionScreen({ categoryId, onBack, onSubmit }: ProblemDescriptionScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit();
    }
  };

  const canProceed = () => {
    if (currentStep === 0) return selectedSubcategory !== '';
    if (currentStep === 1) return description.length >= 20;
    if (currentStep === 2) return selectedUrgency !== '';
    if (currentStep === 3) return selectedBudget !== '';
    return true;
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack}>
            <ArrowLeft className="text-[#333333]" size={24} />
          </button>
          <div className="flex-1">
            <h1 className="text-[#333333]" style={{ fontSize: '24px', fontWeight: 700 }}>
              Describe Your Problem
            </h1>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#6c757d]">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-[#667eea]" style={{ fontWeight: 600 }}>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#f8f9fa] rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 overflow-auto pb-32">
        {currentStep === 0 && (
          <div>
            <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
              Select Subcategory
            </h2>
            <div className="space-y-2">
              {subcategories.plumbing.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                    selectedSubcategory === sub
                      ? 'border-[#667eea] bg-[#667eea]/5'
                      : 'border-[#f8f9fa] bg-[#f8f9fa]'
                  }`}
                >
                  <span
                    className={selectedSubcategory === sub ? 'text-[#667eea]' : 'text-[#333333]'}
                    style={{ fontSize: '16px', fontWeight: 600 }}
                  >
                    {sub}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
              Describe the Problem
            </h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide details about the issue you're experiencing..."
              className="w-full bg-[#f8f9fa] border border-transparent rounded-xl px-4 py-4 focus:outline-none focus:border-[#667eea] transition-colors min-h-[200px] resize-none"
            />
            <div className="flex justify-between mt-2">
              <span className="text-[#6c757d] text-sm">Minimum 20 characters</span>
              <span className={`text-sm ${description.length >= 20 ? 'text-[#28a745]' : 'text-[#6c757d]'}`}>
                {description.length} characters
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-[#333333] mb-3" style={{ fontSize: '16px', fontWeight: 600 }}>
                Add Photos (Optional)
              </h3>
              <button className="w-full border-2 border-dashed border-[#667eea] rounded-xl p-8 flex flex-col items-center gap-2 text-[#667eea]">
                <Upload size={32} />
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Upload Photos</span>
                <span className="text-[#6c757d] text-xs">Up to 5 images</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
              How Urgent Is This?
            </h2>
            <div className="space-y-3">
              {urgencyLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedUrgency(level.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                    selectedUrgency === level.id
                      ? 'border-current'
                      : 'border-[#f8f9fa] bg-[#f8f9fa]'
                  }`}
                  style={{
                    borderColor: selectedUrgency === level.id ? level.color : undefined,
                    backgroundColor: selectedUrgency === level.id ? `${level.color}10` : undefined
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: level.color }}
                    />
                    <div>
                      <div
                        style={{
                          color: selectedUrgency === level.id ? level.color : '#333333',
                          fontSize: '16px',
                          fontWeight: 600
                        }}
                      >
                        {level.label}
                      </div>
                      <div className="text-[#6c757d] text-sm">{level.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
              What's Your Budget?
            </h2>
            <div className="space-y-2">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                    selectedBudget === budget.id
                      ? 'border-[#667eea] bg-[#667eea]/5'
                      : 'border-[#f8f9fa] bg-[#f8f9fa]'
                  }`}
                >
                  <span
                    className={selectedBudget === budget.id ? 'text-[#667eea]' : 'text-[#333333]'}
                    style={{ fontSize: '16px', fontWeight: 600 }}
                  >
                    {budget.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-[#333333] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
              Where Is the Job?
            </h2>
            <div className="bg-[#f8f9fa] rounded-xl h-48 mb-4 flex items-center justify-center text-[#6c757d]">
              Map Placeholder
            </div>
            <button className="w-full bg-[#667eea] text-white py-4 rounded-xl flex items-center justify-center gap-2">
              <MapPin size={20} />
              <span style={{ fontSize: '16px', fontWeight: 600 }}>Use Current Location</span>
            </button>
            <div className="mt-4">
              <label className="block text-[#333333] mb-2">Or enter address manually</label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full bg-[#f8f9fa] border border-transparent rounded-xl px-4 py-4 focus:outline-none focus:border-[#667eea] transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] p-6 bg-white border-t border-[#f8f9fa]">
        <div className="flex gap-3">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-8 py-4 rounded-xl border-2 border-[#667eea] text-[#667eea]"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Back
            </button>
          )}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1 text-white py-4 rounded-xl shadow-lg disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '16px', fontWeight: 600 }}
          >
            {currentStep === steps.length - 1 ? 'Submit Request' : 'Continue'}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
