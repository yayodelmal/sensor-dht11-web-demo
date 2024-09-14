import { io } from 'socket.io-client';
import config from '../config/environments';

// Conectar a la API usando Socket.IO
const socket = io(config.socketUrl, {
  transports: ['websocket'], // Fuerza el uso de WebSocket
  reconnection: true,         // Habilita la reconexión automática si se cae la conexión
  reconnectionAttempts: 5,    // Número de intentos de reconexión
  reconnectionDelay: 1000     // Tiempo entre cada intento
});

// Escuchar eventos de conexión y error
socket.on('connect', () => {
  console.log('Conectado a Socket.IO con ID:', socket.id);  // Verificar si la conexión es exitosa
});

socket.on('connect_error', (error) => {
  console.log('Error de conexión:', error);  // Mostrar si hay algún error en la conexión
});

socket.on('disconnect', () => {
  console.log('Desconectado del servidor Socket.IO');
});

// Función para escuchar los datos del sensor
export const subscribeToSensorData = (callback: (data: { temperature: number; humidity: number }) => void) => {
  socket.on('sensorData', (data) => {
    console.log('Datos recibidos en el frontend:', data);  // Verificar si los datos llegan al frontend
    callback(data);
  });
};

// Función para desconectar el WebSocket cuando sea necesario
export const disconnectSocket = () => {
  socket.off('sensorData');
};
