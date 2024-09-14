import time
from sensor import read_sensor_data
from api import send_data_to_api

# Inicializar el último valor válido como None
last_valid_data = None

# Bucle principal para leer los datos y enviarlos continuamente
if __name__ == '__main__':
    while True:
        sensor_data = read_sensor_data()
        
        if sensor_data:
            # Actualizar los últimos datos válidos
            last_valid_data = sensor_data
            print(f"Nuevos datos del sensor: {sensor_data}")
        else:
            if last_valid_data:
                # Usar los últimos datos válidos si la lectura falla
                print("No se pudieron obtener datos nuevos, enviando los últimos datos válidos.")
                sensor_data = last_valid_data
            else:
                # Si no tenemos datos anteriores, no podemos enviar nada
                print("No se pueden obtener datos del sensor y no hay datos válidos anteriores.")
                time.sleep(10)
                continue

        # Enviar los datos (nuevos o últimos válidos) a la API
        send_data_to_api(sensor_data)

        # Esperar 10 segundos antes de la siguiente lectura
        time.sleep(10)
