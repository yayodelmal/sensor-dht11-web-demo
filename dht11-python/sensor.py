import adafruit_dht
import board

# Configurar el sensor DHT11
dht_device = adafruit_dht.DHT11(board.D4)

# Función para leer los datos del sensor
def read_sensor_data():
    try:
        # Leer la temperatura y la humedad del sensor
        temperature = dht_device.temperature
        humidity = dht_device.humidity
        if temperature is not None and humidity is not None:
            return {'temperature': temperature, 'humidity': humidity}
        else:
            return None
    except RuntimeError as error:
        # Manejar errores de lectura del sensor
        print(f"Error al leer el sensor: {error}")
        return None
