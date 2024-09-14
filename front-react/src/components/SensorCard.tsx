import { ThermometerIcon, DropletIcon } from 'lucide-react'

export default function SensorCard(props: { temperature: number; humidity: number } = { temperature: 22, humidity: 59 }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-xl p-6 max-w-sm mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800">Lectura sensor DHT11</h2>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-2 rounded-full">
              <ThermometerIcon className="h-8 w-8 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Temperatura</p>
              <p className="text-2xl font-bold text-gray-800">{props.temperature} °C</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <DropletIcon className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Humedad</p>
              <p className="text-2xl font-bold text-gray-800">{props.humidity} %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}