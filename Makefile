_: npm-install build start

build:
	DOCKER_BUILDKIT=1 docker-compose build --pull --parallel

start:
	docker-compose up -d front-end

restart:
	docker-compose up -d --force-recreate front-end

cli:
	docker-compose run --rm cli ash

npm-install:
	docker-compose run --rm cli npm install

npm-upgrade:
	docker-compose run --rm cli npm upgrade