

build-client:
	docker build -t sample-app ./client

run-client: build-client
	docker run -it -v ${PWD}/client:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 --rm sample-app