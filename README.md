1. cd project directory
2. Run cp .env.example .env
3. Install docker and docker-compose
4. Run docker-compose up in project root directory
5. Run docker-compose exec app php artisan key:generate 
6. Run docker-compose exec app php artisan optimize 
7. Run docker-compose exec app php artisan migrate