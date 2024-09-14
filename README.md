# Monitoreo en Tiempo Real del Sensor DHT11 con NestJS, WebSockets y React.

Este proyecto es un sistema de monitoreo en tiempo real de temperatura y humedad utilizando el sensor DHT11. El sistema consta de tres componentes principales:

1. Aplicación Python: Recoge los datos de temperatura y humedad del sensor DHT11 y los envía al backend.
2. API en NestJS: Un servicio backend construido con NestJS y WebSockets que recibe los datos del sensor y los transmite en tiempo real a los clientes conectados.
3. Frontend en React: Una interfaz web que se conecta a la API mediante WebSockets para mostrar las lecturas de temperatura y humedad en tiempo real.

