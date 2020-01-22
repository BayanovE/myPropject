## Запуск
 Перед первым запуском выполните:

```
bash prepare.sh
```
поднимаем контейнеры

```
docker-compose up
```

Дефолтный адресс `http://localhost:4022/`

Раняем

```
docker-compose down
```

## Разработка
### Frontend

```
docker-compose exec frontend bash
cd /var/www/frontend
```

### Backend

```
docker-compose exec backend bash
cd /var/www/backend
```

Миграции (http://docs.sequelizejs.com/manual/tutorial/migrations.html)

```
yarn run migrate-up
```

Что сделано: 
    - Готов шаблон
    - 