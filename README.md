1. git clone https://github.com/johnybask/laravel_docker_preset.git
1. cd project directory
2. Run cp .env.example .env
3. Install docker and docker-compose
4. Run docker-compose up in project root directory
5. Run docker-compose exec app php artisan generate:key
6. Run docker-compose exec app php artisan migrate

<strong>Permission problems</strong><br>
If you've got error like "laravel.log" could not be opened in append mode: failed to open stream: Permission denied" then run this command: 
docker-compose exec app chown -R www-data:www-data /var/www/storage
