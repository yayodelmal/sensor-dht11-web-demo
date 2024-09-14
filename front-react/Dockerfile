# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación React
RUN npm run build

# Etapa 2: Servir la aplicación con nginx
FROM nginx:alpine

# Copiar los archivos generados en la etapa de construcción a la carpeta de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuración custom de nginx si es necesario (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 80

# Comando de inicio de nginx
CMD ["nginx", "-g", "daemon off;"]
