_: setup-env npm-install build start

build:
	DOCKER_BUILDKIT=1 docker-compose build --pull --parallel

start:
	docker-compose up -d app

restart:
	docker-compose up -d --force-recreate app

cli:
	docker-compose run --rm cli ash

npm-install:
	docker-compose run --rm cli npm install

npm-upgrade:
	docker-compose run --rm cli npm upgrade

setup-env:
	if [ ! -f ".env" ]; then \
    	cp .env.dist .env; \
    fi