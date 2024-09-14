import requests
from config import API_URL

# Función para enviar los datos a la API
def send_data_to_api(data):
    try:
        response = requests.post(API_URL, json=data)
        if response.status_code in [200, 201]:  # Tratar tanto 200 como 201 como éxitos
            print('Datos enviados correctamente:', response.json())
        else:
            print('Error al enviar los datos a la API:', response.status_code)
    except requests.exceptions.RequestException as e:
        print(f"Error al conectar con la API: {e}")
