### Проект: Web Development Tasks

### FAQ

### Инструкция по запуску проекта

Для запуска проекта необходимо выполнить следующие шаги:

#### Шаг 1: Установка зависимостей

Перед запуском проекта убедитесь, что у вас установлен Node.js и npm (или yarn).

```bash
npm install
```

#### Шаг 2: Запуск приложения

Для запуска проекта в режиме разработки выполните:

```bash
npm run dev
```

### Структура проекта

```
src/
├── shared/                   # Переиспользуемые UI компоненты и конфигурация для роутера
│   ├── ui/        # Компоненты пользовательского интерфейса
│   ├── router-config      # Конфигурация для роутера
│
├── entities/                 # Сущности проекта (todo, user)
│   ├── todo              # Модель и логика для задач (todo)
│   ├── user             # Модель и логика для пользователя (user)
│
├── app/                      # Глобальные сущности приложения
│   ├── router-provider    # Провайдер для роутера
│
├── widgets/                  # Виджеты приложения
│   ├── header/               # Виджет хедера
│
└── pages/                    # Основная директория страниц
    ├── main-page/            # Основная страница приложения
    ├── task-1-html-css/      # Страница выполнения первого задания (HTML и CSS)
    ├── task-2-javascript/    # Страница выполнения второго задания (JavaScript)
    └── task-3-api-integration/  # Страница выполнения третьего задания (интеграция с API)
        ├── _components/      # Компоненты, относящиеся к заданию
        ├── _api/             # Запросы к API
```

### Примечание
В рамках выполнения третьего задания (интеграция с API), использовались компоненты из первого задания для отображения профиля пользователя.


#### Задание 1: HTML и CSS

**Описание:**
Создание страницы профиля пользователя с элементами:
- Аватар (изображение)
- Имя пользователя
- Краткая информация о пользователе (биография)
- Контактная информация (email и телефон)

**Требования:**
- Использование HTML для структуры страницы.
- Применение CSS для стилизации страницы.
- Адаптивный дизайн для корректного отображения на мобильных устройствах.
- Соответствие HTML семантическим стандартам.
- Визуальная привлекательность и удобство использования.

#### Задание 2: JavaScript

**Описание:**
Разработка веб-приложения для списка дел (To-Do List) с возможностями добавления, удаления и отметки заданий как выполненных.

**Требования:**
- Использование JavaScript для логики приложения.
- Интерактивность и отзывчивость интерфейса.
- Базовая валидация (например, предотвращение добавления пустых заданий).
- Корректность работы JavaScript кода.
- Чистота и читаемость кода.

#### Задание 3: Git

**Описание:**
Управление проектом с использованием Git, включая создание репозитория, работу с ветками и Pull Request (PR).

**Требования:**
- Инициализация репозитория на GitHub с файлом README.md.
- Создание ветки "develop" для разработки.
- Создание PR из ветки "develop" в "main" с объяснением внесенных изменений.
- Корректная работа с ветками и понимание Git.

#### Задание 4: Интеграция с бекендом

**Описание:**
Создание страницы для отображения данных пользователей, полученных с публичного API, с возможностью открытия подробной информации о каждом пользователе.

**Требования:**
- Использование fetch API для получения данных с API.
- Отображение списка пользователей и подробной информации на разных страницах.
- Интерактивность и удобство использования интерфейса.
- Корректная обработка и отображение данных с API.

---

Этот проект включает в себя выполнение различных задач по веб-разработке с использованием HTML, CSS, JavaScript, Git и интеграцию с внешним API для отображения данных пользователей.