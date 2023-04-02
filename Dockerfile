# Используем официальный образ Node.js 14 в качестве базового образа
FROM node:14-alpine as builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Собираем приложение для production
RUN npm run build

# Создаем production образ
FROM node:14-alpine
WORKDIR /app

# Копируем собранные файлы из предыдущего образа
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Устанавливаем переменную среды NODE_ENV в production
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
