import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface SensorData {
  temperature: number;
  humidity: number;
}

interface SensorChartProps {
  data: SensorData[];
}

const SensorChart: React.FC<SensorChartProps> = ({ data }) => {

  const temperatureData = data.map((entry) => entry.temperature);
  const humidityData = data.map((entry) => entry.humidity);
  const xLabels = data.map((_, index) => index + 1); // Usamos el índice como etiqueta del eje X

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Historial de Lecturas</h2>
      <div style={{ width: '100%', height: 400 }}>
      <LineChart
          series={[
            {
              data: temperatureData,
              curve: 'catmullRom',
              label: 'Temperatura (°C)',
              color: '#EF4444',
            },
            {
              data: humidityData,
              curve: 'catmullRom',
              label: 'Humedad (%)',
              color: '#3B82F6',
            },
          ]}
          xAxis={[
            {
              data: xLabels,
              label: 'Lecturas',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SensorChart;
