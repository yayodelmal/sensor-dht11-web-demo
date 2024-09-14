import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

interface SensorData {
  time: string;
  temperature: number;
  humidity: number;
}

const SensorChart: React.FC<{ data: SensorData[] }> = ({ data }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Historial de Lecturas</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#6B7280" />
          <YAxis yAxisId="temp" orientation="left" stroke="#EF4444" />
          <YAxis yAxisId="humidity" orientation="right" stroke="#3B82F6" />
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="5 5" />
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.5rem' }}
          />
          <Legend />
          <Line
            yAxisId="temp"
            type="monotone"
            dataKey="temperature"
            name="Temperatura (°C)"
            stroke="#EF4444"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="humidity"
            type="monotone"
            dataKey="humidity"
            name="Humedad (%)"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;
