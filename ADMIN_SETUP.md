# Настройка админки Decap CMS

## Доступ к админке
Админка доступна по адресу: `https://your-site.com/admin`

## Настройка GitHub аутентификации

### 1. Создание OAuth App в GitHub
1. Зайдите в GitHub → Settings → Developer settings → OAuth Apps
2. Нажмите "New OAuth App"
3. Заполните данные:
   - **Application name**: `PaperBag CMS`
   - **Homepage URL**: `https://your-site.com`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

### 2. Обновление конфигурации
1. Скопируйте **Client ID** из созданного OAuth App
2. В файле `public/admin/config.yml` или `public/admin/index.html`:
   - Замените `username/repository-name` на ваш репозиторий (например: `paperbag/website`)
   - Убедитесь, что `branch: main` соответствует вашей основной ветке

### 3. Netlify Identity (альтернатива)
Если используете Netlify для хостинга:
1. В настройках сайта Netlify включите Identity
2. В External providers добавьте GitHub
3. Замените в конфиге:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

## Возможности админки

### Переводы
- Редактирование украинских и английских переводов
- Изменение текстов навигации, страниц, контактов

### Страницы продукции
- Создание новых страниц продуктов
- Загрузка изображений
- SEO настройки для каждой страницы

### Новости и блог
- Создание статей с поддержкой Markdown
- Планирование публикаций
- Управление изображениями

### Настройки сайта
- Контактная информация компании
- SEO метаданные
- Рабочие часы и адреса

## Безопасность
- `/admin` скрыт от поисковых роботов
- Доступ только через GitHub аутентификацию
- Все изменения сохраняются как коммиты в GitHub