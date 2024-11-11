import React from 'react';
import { Clock } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';

const NextStream = () => {
  // Next Tuesday at 20:00
  const nextTuesday = getNextTuesday();
  const { days, hours, minutes, seconds } = useCountdown(nextTuesday);

  return (
    <section id="next-stream" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Prochain Live</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <CountdownBox label="Jours" value={days} />
            <CountdownBox label="Heures" value={hours} />
            <CountdownBox label="Minutes" value={minutes} />
            <CountdownBox label="Secondes" value={seconds} />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Clock className="w-5 h-5" />
              <span>Chaque mardi à 20h00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountdownBox = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center p-4 bg-gray-800 rounded-lg">
    <div className="text-4xl font-bold text-blue-500 mb-2">{value}</div>
    <div className="text-gray-400 text-sm uppercase tracking-wide">{label}</div>
  </div>
);

function getNextTuesday(): Date {
  const now = new Date();
  const resultDate = new Date();
  
  resultDate.setDate(now.getDate() + ((2 + 7 - now.getDay()) % 7));
  resultDate.setHours(20, 0, 0, 0);
  
  if (resultDate < now) {
    resultDate.setDate(resultDate.getDate() + 7);
  }
  
  return resultDate;
}

export default NextStream;