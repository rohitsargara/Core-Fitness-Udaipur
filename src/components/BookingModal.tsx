import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import { X, Check, Phone, MessageSquare, Calendar, Clock, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('strength');
  const [preferredShift, setPreferredShift] = useState<'morning' | 'evening'>('morning');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!fullName.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    // Indian phone numbers: 10 digits
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const shiftText = preferredShift === 'morning' ? 'Morning Shift (6 AM - 12 PM)' : 'Evening Shift (3 PM - 9 PM)';
    const planText = preselectedPlan ? `Interested in plan: ${preselectedPlan}.` : '';
    const message = `Hello Core Fitness Udaipur, I would like to schedule a visit or induction session.\nName: ${fullName || 'Prospective Member'}\nShift preference: ${shiftText}\nGoal: ${goal}\n${planText}`;
    return `https://wa.me/${GYM_DATA.phoneClean}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A18]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FBF8F3] rounded-lg overflow-hidden border border-[rgba(30,29,27,0.12)] shadow-2xl my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[rgba(30,29,27,0.08)] flex items-center justify-between bg-[#FAF6F0]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8D3B24] uppercase tracking-wider">
              <span>Facility Induction & Tour</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <span>Udaipur</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#1E1D1B] mt-0.5">
              {preselectedPlan ? `Enquire for ${preselectedPlan}` : 'Schedule a Gym Walkthrough'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#5C5852] hover:text-[#1E1D1B] rounded hover:bg-[#F4EFE6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Meet our certified trainers at Parshuram Choraha, test the biomechanical machinery,
                and discuss your fitness targets without high-pressure sales.
              </p>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1D1B] mb-1.5">
                  Full Name <span className="text-[#BC5A36]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-2.5 rounded bg-white border text-sm text-[#1E1D1B] placeholder-[#9E978E] focus:outline-none focus:ring-1 focus:ring-[#BC5A36] ${
                    errors.name ? 'border-red-500' : 'border-[rgba(30,29,27,0.12)]'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1D1B] mb-1.5">
                  Mobile Number <span className="text-[#BC5A36]">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-xs font-mono text-[#5C5852] bg-[#F2ECE1] border border-r-0 border-[rgba(30,29,27,0.12)] rounded-l">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="88903 77237"
                    className={`w-full px-4 py-2.5 rounded-r bg-white border text-sm text-[#1E1D1B] placeholder-[#9E978E] focus:outline-none focus:ring-1 focus:ring-[#BC5A36] ${
                      errors.phone ? 'border-red-500' : 'border-[rgba(30,29,27,0.12)]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Training Focus */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1D1B] mb-1.5">
                  Primary Fitness Focus
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-white border border-[rgba(30,29,27,0.12)] text-sm text-[#1E1D1B] focus:outline-none focus:ring-1 focus:ring-[#BC5A36]"
                >
                  <option value="strength">Biomechanical Strength & Muscle Hypertrophy</option>
                  <option value="core-45">CORE 45-45™ 45-Day Protocol</option>
                  <option value="crossfit">CrossFit, Heavy Bag Boxing & Combat</option>
                  <option value="fat-loss">Fat Loss & Body Recomposition</option>
                  <option value="personal-training">1-on-1 Dedicated Personal Coaching</option>
                  <option value="general">General Health, Posture & Longevity</option>
                </select>
              </div>

              {/* Shift Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1D1B] mb-1.5">
                  Preferred Visit / Training Shift
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPreferredShift('morning')}
                    className={`py-2.5 px-3 text-xs font-semibold rounded border text-left transition-colors ${
                      preferredShift === 'morning'
                        ? 'border-[#BC5A36] bg-[#FAF6F0] text-[#1E1D1B]'
                        : 'border-[rgba(30,29,27,0.1)] text-[#5C5852] hover:bg-white'
                    }`}
                  >
                    <span className="block font-serif font-medium">Morning Shift</span>
                    <span className="block font-mono text-[11px] text-[#8D3B24]">6:00 AM – 12:00 PM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredShift('evening')}
                    className={`py-2.5 px-3 text-xs font-semibold rounded border text-left transition-colors ${
                      preferredShift === 'evening'
                        ? 'border-[#BC5A36] bg-[#FAF6F0] text-[#1E1D1B]'
                        : 'border-[rgba(30,29,27,0.1)] text-[#5C5852] hover:bg-white'
                    }`}
                  >
                    <span className="block font-serif font-medium">Evening Shift</span>
                    <span className="block font-mono text-[11px] text-[#8D3B24]">3:00 PM – 9:00 PM</span>
                  </button>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1D1B] mb-1.5">
                  Questions or Training Background (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any previous gym experience, injuries, or specific goals..."
                  className="w-full px-4 py-2 rounded bg-white border border-[rgba(30,29,27,0.12)] text-sm text-[#1E1D1B] placeholder-[#9E978E] focus:outline-none focus:ring-1 focus:ring-[#BC5A36]"
                />
              </div>

              {/* Form Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#FBF8F3] bg-[#BC5A36] hover:bg-[#A84E2E] rounded transition-colors shadow-sm"
                >
                  Confirm Walkthrough Request
                </button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-[rgba(30,29,27,0.08)] w-full" />
                  <span className="bg-[#FBF8F3] px-3 text-[11px] text-[#5C5852] font-mono uppercase">
                    or reach trainers directly
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#525D45] text-white hover:bg-[#434c38] text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href={`tel:${GYM_DATA.phoneClean}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#F4EFE6] border border-[rgba(30,29,27,0.1)] text-[#1E1D1B] hover:bg-[#ECE4D4] text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#BC5A36]" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DC] text-[#BC5A36] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-medium text-[#1E1D1B]">
                  Walkthrough Requested, {fullName}!
                </h4>
                <p className="text-sm text-[#5C5852] max-w-md mx-auto leading-relaxed">
                  Our resident coach at Parshuram Choraha has received your request.
                  We look forward to introducing you to Core Fitness during your preferred {preferredShift} shift.
                </p>
              </div>

              {/* Confirmation Pass Voucher */}
              <div className="p-5 rounded-lg bg-[#FAF6F0] border border-[rgba(30,29,27,0.08)] text-left text-xs space-y-3 font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(30,29,27,0.06)]">
                  <span className="text-[#8D3B24] uppercase font-semibold">Induction Pass</span>
                  <span className="text-[#525D45]">Confirmed</span>
                </div>
                <div className="flex items-start gap-2 text-[#1E1D1B]">
                  <MapPin className="w-4 h-4 text-[#BC5A36] shrink-0 mt-0.5" />
                  <span>Plot 4, C Block, Parshuram Choraha, Sector 8, Udaipur</span>
                </div>
                <div className="flex items-center gap-2 text-[#5C5852]">
                  <Clock className="w-4 h-4 text-[#525D45] shrink-0" />
                  <span>
                    Shift Window: {preferredShift === 'morning' ? '06:00 AM – 12:00 PM' : '03:00 PM – 09:00 PM'}
                  </span>
                </div>
                <div className="text-[11px] text-[#5C5852] pt-2 border-t border-[rgba(30,29,27,0.06)]">
                  Direct Coach Hotline: +91 88903 77237
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#525D45] hover:bg-[#434c38] rounded transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ping Trainer on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#F4EFE6] hover:bg-[#ECE4D4] rounded transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
