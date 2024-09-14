import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorGateway } from './sensor/sensor.gateway';
import { SensorController } from './sensor/sensor.controller';

@Module({
  imports: [],
  controllers: [AppController, SensorController],
  providers: [AppService, SensorGateway],
})
export class AppModule {}
