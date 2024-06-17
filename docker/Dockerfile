# Stage 1: Сборка приложения
FROM node:lts-alpine as build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем зависимости package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Собираем приложение для production с минификацией
RUN npm run build

# Stage 2: Запуск Nginx для раздачи статики
FROM nginx:alpine

# Удаляем стандартную конфигурацию Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем собранные файлы из предыдущего stage в nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Копируем конфигурационный файл nginx
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет прослушивать Nginx
EXPOSE 80

# Запускаем Nginx в фоновом режиме при старте контейнера
CMD ["nginx", "-g", "daemon off;"]
