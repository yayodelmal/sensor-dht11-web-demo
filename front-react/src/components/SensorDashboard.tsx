import React, { useState, useEffect } from 'react';
import SensorCard from './SensorCard';
import SensorChart from './SensorChart';
import { subscribeToSensorData, disconnectSocket } from '../services/socketService';

interface SensorData {
  time: string;
  temperature: number;
  humidity: number;
}

const ElegantSensorDashboard: React.FC = () => {
  const [currentData, setCurrentData] = useState<SensorData>({
    time: '',
    temperature: 0,
    humidity: 0,
  });
  const [historicalData, setHistoricalData] = useState<SensorData[]>([]);

  useEffect(() => {
    const handleSensorData = (data: { temperature: number; humidity: number }) => {
      const newData: SensorData = {
        time: new Date().toLocaleTimeString(),
        temperature: data.temperature,
        humidity: data.humidity,
      };
      setCurrentData(newData);
      setHistoricalData((prevData) => [...prevData.slice(-19), newData]);
    };

    // Suscribirse a los datos del sensor
    subscribeToSensorData(handleSensorData);

    // Limpiar la suscripción al desmontar el componente
    return () => {
      disconnectSocket();
    };
  }, []);

  // Calcular promedios
  const averageTemperature =
    historicalData.length > 0
      ? historicalData.reduce((sum, data) => sum + data.temperature, 0) / historicalData.length
      : 0;

  const averageHumidity =
    historicalData.length > 0
      ? historicalData.reduce((sum, data) => sum + data.humidity, 0) / historicalData.length
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Dashboard Sensor DHT11
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          <SensorCard
            temperature={currentData.temperature}
            humidity={currentData.humidity}
          />
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Estadísticas</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Temperatura Promedio</p>
                <p className="text-2xl font-bold text-gray-800">
                  {averageTemperature.toFixed(1)}°C
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Humedad Promedio</p>
                <p className="text-2xl font-bold text-gray-800">
                  {averageHumidity.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </div>
        <SensorChart data={historicalData} />
      </div>
    </div>
  );
};

export default ElegantSensorDashboard;
