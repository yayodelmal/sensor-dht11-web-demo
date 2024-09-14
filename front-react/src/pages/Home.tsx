import { useEffect, useState } from 'react';
import SensorCard from '../components/SensorCard';
import { subscribeToSensorData, disconnectSocket } from '../services/socketService';


export default function Home() {
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);

  useEffect(() => {
    // Conectarse a WebSocket y recibir los datos
    subscribeToSensorData((data: { temperature: number; humidity: number }) => {
      setTemperature(data.temperature);
      setHumidity(data.humidity);
    })

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Monitoreo en Tiempo Real</h1>
      <SensorCard temperature={temperature} humidity={humidity} />
    </div>
  );
}
