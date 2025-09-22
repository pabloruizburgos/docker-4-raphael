# Dockerfile para mf-accounts (Microfrontend)
FROM node:18-alpine

# Instalar serve globalmente
RUN npm install -g serve

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto
EXPOSE 3001

# Comando para servir los archivos estáticos con CORS
CMD ["serve", "dist", "--cors", "-l", "3001", "--host", "0.0.0.0"]