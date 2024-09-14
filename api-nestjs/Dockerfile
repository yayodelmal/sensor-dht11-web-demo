# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package*.json ./

# Instalar las dependencias necesarias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación NestJS
RUN npm run build

# Etapa 2: Preparar para producción
FROM node:18-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar solo las dependencias necesarias
COPY --from=build /app/package*.json ./
RUN npm install --only=production

# Copiar la aplicación construida desde la etapa de build
COPY --from=build /app/dist ./dist

# Exponer el puerto 3000 (o el puerto que utilice tu aplicación)
EXPOSE 3000

# Comando para ejecutar la aplicación NestJS
CMD ["node", "dist/main"]
