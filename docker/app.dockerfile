FROM php:8.0-fpm
WORKDIR /var/www
RUN apt-get update && apt-get install -y  \
    libmagickwand-dev \
    --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install pdo_mysql
ADD . /var/www
RUN chown -R www-data:www-data /var/www
   
