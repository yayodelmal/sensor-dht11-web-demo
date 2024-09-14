import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SensorGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection() {
    console.log('Cliente conectado!');
  }

  handleDisconnect() {
    console.log('Cliente desconectado!');
  }

  // Método para emitir los datos del sensor a los clientes conectados
  sendSensorData(data: { temperature: number; humidity: number }) {
    this.server.emit('sensorData', data);
  }
}
