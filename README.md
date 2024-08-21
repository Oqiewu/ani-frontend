# Ani Frontend

<!-- Блок информации о репозитории в бейджах -->
![Static Badge](https://img.shields.io/badge/Oqiewu-Ani-frontend)
![GitHub top language](https://img.shields.io/github/languages/top/Oqiewu/ani-frontend)

## О проекте Ani

**Ani** — персональный гид по миру аниме, предлагающий интерфейс для просмотра контента и доступ к энциклопедическим данным. Проект включает в себя frontend и backend, обеспечивающий обработку данных и взаимодействие с базой данных, необходимой для работы приложения.

**Frontend** и **backend** части приложения разделены на два отдельных репозитория:
- [ani-frontend](https://github.com/Oqiewu/ani-frontend) — клиентская часть (этот репозиторий).
- [ani-backend](https://github.com/Oqiewu/ani-backend) — серверная часть.

## О клиентской части (Ani Frontend)

Ani Frontend отвечает за:
- Отображение пользовательского интерфейса.
- Взаимодействие с серверной частью (backend) через API.

### Основные технологии

- **React** — библиотека для создания пользовательских интерфейсов.
- **TypeScript** — статическая типизация для JavaScript.
- **Docker** — контейнеризация приложения.

### Установка и запуск

#### Запуск с Docker

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/Oqiewu/ani-frontend.git
   ```

2. Перейдите в директорию проекта (здесь находится `docker-compose.yaml`):
   ```bash
   cd ani-frontend
   ```
3. Создайте и запустите контейнеры:
   ```bash
   docker-compose up -d
   ```
   Эта команда выполнит сборку Docker-образов и запустит все необходимые контейнеры в фоновом режиме.

4. Проверьте работу приложения:
   
   Приложение будет доступно по адресу `http://localhost:3000`.

#### Запуск без Docker

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/Oqiewu/ani-frontend.git
   ```

2. Перейдите в директорию проекта (здесь находится `docker-compose.yaml`):
   ```bash
   cd ani-frontend
   ```

3. Установите зависимости:
   ```bash
   npm install
   ```

4. Запустите приложение:
   ```bash
   npm start
   ```

5. Проверьте работу приложения:
   
   Приложение будет доступно по адресу `http://localhost:3000`.

## Структура проекта
- `src/` — исходный код приложения.
- `public/` — статические файлы и шаблоны.