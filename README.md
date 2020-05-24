# Twitter Dashboard

Simple React + Socket.io application to consume backend with real-time feed based on defined tracking subject.

### Use

First run the following command to set up the needed files. A `.env` file will be created. Populate with parameters as needed.
```sh
make setup-env
```

Run a simple make to build the docker images and start the project.
```sh
make
```

If preferable to use attached containers, first build the images, then start the container using the following:
```sh
make build
docker-compose up app
```

Your server will be available at:
```
http://localhost:8080
```

### To-do

- Add tests
- Add error collection and improve user handling
- Fix misbehavior of search bar and feed stream