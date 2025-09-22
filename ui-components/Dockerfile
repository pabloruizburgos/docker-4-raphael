# Dockerfile para ui-components (Microfrontend)
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
EXPOSE 3005

# Comando para servir los archivos estáticos con CORS
CMD ["serve", "dist", "--cors", "--listen", "3005"]