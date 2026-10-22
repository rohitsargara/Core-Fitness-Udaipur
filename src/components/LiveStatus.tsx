import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

export const LiveStatus: React.FC = () => {
  const [statusInfo, setStatusInfo] = useState<{
    isOpen: boolean;
    currentShiftLabel: string;
    nextEventLabel: string;
    localTimeStr: string;
  }>({
    isOpen: false,
    currentShiftLabel: 'Checking status...',
    nextEventLabel: '',
    localTimeStr: '',
  });

  useEffect(() => {
    const calculateStatus = () => {
      // Calculate current date/time in Udaipur (Indian Standard Time: UTC+5:30)
      const now = new Date();
      // UTC time + 5.5 hours in milliseconds
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);

      const dayOfWeek = istDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentTimeInMins = hours * 60 + minutes;

      const timeFormatter = new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      });
      const localTimeStr = timeFormatter.format(now);

      if (dayOfWeek === 0) {
        // Sunday
        setStatusInfo({
          isOpen: false,
          currentShiftLabel: 'Closed Today (Sunday)',
          nextEventLabel: 'Opens Monday at 6:00 AM',
          localTimeStr,
        });
        return;
      }

      if (dayOfWeek === 6) {
        // Saturday
        // Morning: 6:00 to 10:00 (360 - 600)
        // Evening: 15:00 to 19:00 (900 - 1140)
        if (currentTimeInMins >= 360 && currentTimeInMins < 600) {
          setStatusInfo({
            isOpen: true,
            currentShiftLabel: 'Open · Saturday Morning Shift',
            nextEventLabel: 'Closes at 10:00 AM (Evening opens at 3:00 PM)',
            localTimeStr,
          });
        } else if (currentTimeInMins < 360) {
          setStatusInfo({
            isOpen: false,
            currentShiftLabel: 'Facility Opening Soon',
            nextEventLabel: 'Opens at 6:00 AM today',
            localTimeStr,
          });
        } else if (currentTimeInMins >= 600 && currentTimeInMins < 900) {
          setStatusInfo({
            isOpen: false,
            currentShiftLabel: 'Midday Sanitize & Maintenance Break',
            nextEventLabel: 'Evening shift opens at 3:00 PM today',
            localTimeStr,
          });
        } else if (currentTimeInMins >= 900 && currentTimeInMins < 1140) {
          setStatusInfo({
            isOpen: true,
            currentShiftLabel: 'Open · Saturday Evening Shift',
            nextEventLabel: 'Closes at 7:00 PM tonight',
            localTimeStr,
          });
        } else {
          setStatusInfo({
            isOpen: false,
            currentShiftLabel: 'Closed for the Night',
            nextEventLabel: 'Next opens Monday at 6:00 AM',
            localTimeStr,
          });
        }
        return;
      }

      // Monday - Friday (Weekday)
      // Morning: 6:00 to 12:00 (360 - 720)
      // Evening: 15:00 to 21:00 (900 - 1260)
      if (currentTimeInMins >= 360 && currentTimeInMins < 720) {
        setStatusInfo({
          isOpen: true,
          currentShiftLabel: 'Open · Morning Training Shift',
          nextEventLabel: 'Morning shift closes at 12:00 PM · Evening opens 3:00 PM',
          localTimeStr,
        });
      } else if (currentTimeInMins < 360) {
        setStatusInfo({
          isOpen: false,
          currentShiftLabel: 'Facility Opening Soon',
          nextEventLabel: 'Morning shift opens at 6:00 AM today',
          localTimeStr,
        });
      } else if (currentTimeInMins >= 720 && currentTimeInMins < 900) {
        setStatusInfo({
          isOpen: false,
          currentShiftLabel: 'Midday Facility Rest & Deep Sanitize',
          nextEventLabel: 'Evening shift opens at 3:00 PM today',
          localTimeStr,
        });
      } else if (currentTimeInMins >= 900 && currentTimeInMins < 1260) {
        setStatusInfo({
          isOpen: true,
          currentShiftLabel: 'Open · Evening Training Shift',
          nextEventLabel: 'Evening shift open until 9:00 PM tonight',
          localTimeStr,
        });
      } else {
        setStatusInfo({
          isOpen: false,
          currentShiftLabel: 'Closed for the Night',
          nextEventLabel: 'Opens tomorrow at 6:00 AM',
          localTimeStr,
        });
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#5C5852] font-mono tabular-nums">
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${
            statusInfo.isOpen ? 'bg-[#525D45]' : 'bg-[#BC5A36]'
          }`}
          aria-hidden="true"
        />
        <span className="font-sans font-medium text-[#1E1D1B]">
          {statusInfo.currentShiftLabel}
        </span>
      </div>

      <span className="hidden sm:inline text-[#1E1D1B]/20" aria-hidden="true">
        ·
      </span>

      <div className="flex items-center gap-1.5 font-sans text-[#5C5852]">
        <Clock className="w-3.5 h-3.5 text-[#8D3B24]" />
        <span>{statusInfo.nextEventLabel}</span>
      </div>

      <span className="hidden md:inline text-[#1E1D1B]/20" aria-hidden="true">
        ·
      </span>

      <span className="hidden md:inline text-[#8D3B24]">
        Udaipur Local: {statusInfo.localTimeStr} IST
      </span>
    </div>
  );
};
