## YnPraktikum.project15. v.1.0.0
### Учебный проект по созданию сервера на Node.js с использованием фреймворка Express.js.

#### Цель
Создание сервера на Node.js для сервиса Mesto по размещению фотокарточек.

#### Функциональность API

1. Node.js приложение подключается к серверу Mongo по адресу mongodb://localhost:27017/mestodb;
2. запрос на GET /users возвращает всех пользователей из базы;
3. запрос GET /users/:userId возвращает конкретного пользователя;
4. запрос POST /users создаёт пользователя;
5. запрос GET /cards возвращает все карточки всех пользователей;
6. запрос POST /cards создаёт карточку;
7. если в любом из запросов что-то идёт не так, сервер возвращает ответ с ошибкой и соответствующим ей статусом;

##### Дополнительная функциональность API

1. Все ошибки обрабатываются централизованно;
2. Тела запросов и, где необходимо, заголовки и параметры, валидируются по определённым схемам. 
3. Все запросы и ответы записываются в файл request.log;
4. Все ошибки записываются в файл error.log;
5. Файлы логов не добавляются в репозиторий;
6. Секретный ключ для создания и верификации JWT хранится на сервере в .env файле. Этот файл не добавляется в git;
7. Сервер самостоятельно восстанавливается после GET-запроса на URL /crash-test.

#### Доступ к API на удаленном сервере
1. Front-end проекта лежит по адресу: mestoapp.space;
2. Back-end проекта лежит по адресу: api.mestoapp.space;

Проект доступен как по http:// так и по https://

#### Установка и запуск проекта
1. Скачать сборку архивом или используя команду:  
```git clone https://github.com/Atm0Sphere94/project15.git```  
2. Запустить установку зависимостей через терминал:  
```npm i```  
3. Установить [MongoDB community edition](https://docs.mongodb.com/manual/administration/install-community/)

4. Выбрать необходимый вариант запуска сервера:  
##### production - запуск сервера  
```npm run start```  
##### develop - запуск сервера с hot reload  
```npm run dev```  

#### Использованные технологии
+ Node.js
+ Express.js
+ MongoDB
+ Mongoose

