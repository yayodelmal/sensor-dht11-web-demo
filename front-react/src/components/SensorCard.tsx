import React from 'react';
import { ThermometerIcon, DropletIcon } from 'lucide-react';

const SensorCard: React.FC<{ temperature: number; humidity: number }> = ({ temperature, humidity }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Lectura Actual</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-red-100 p-3 rounded-full">
            <ThermometerIcon className="h-8 w-8 text-red-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Temperatura</p>
            <p className="text-3xl font-bold text-gray-800">{temperature.toFixed(1)}°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <DropletIcon className="h-8 w-8 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Humedad</p>
            <p className="text-3xl font-bold text-gray-800">{humidity.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
