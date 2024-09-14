import { Controller, Post, Body } from '@nestjs/common';
import { SensorGateway } from './sensor.gateway';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorGateway: SensorGateway) {}

  @Post()
  receiveSensorData(@Body() sensorData: { temperature: number; humidity: number }) {
    console.log('Datos recibidos:', sensorData);

    // Enviar los datos a través del WebSocket
    this.sensorGateway.sendSensorData(sensorData);

    return { message: 'Datos recibidos correctamente' };
  }
}
