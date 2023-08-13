# Node Cli App

### To run the project in local

- The application needs atleast node `18.x.xx` to run. If you have `nvm` installed do `nvm use` or manually install the required node version
- Run `npm i` to install the dependencies
- With hot-reload `npm run dev`
- Without hot-reload `npm run start`

### To run the application in production mode
- With pm2 `npm run prod-pm2`
- Without pm2 `npm run prod`

### To the run the project in local using Docker
- `docker build --no-cache -f ./Dockerfile -t node-cli-app .`
- `docker run --name my-node-cli-app -t node-cli-app`

To push the images to docker hub
- `docker buildx create --name mydockerbuilder --driver docker-container --bootstrap`
- `docker buildx use mydockerbuilder`
- `docker buildx inspect`
- `docker login --username <docker-hub-username> --password <docker-hub-password>`
- `docker buildx build --no-cache --platform=linux/arm64 --platform=linux/amd64 -t docker.io/<docker-hub-username>/<image-name>:<tag> --push -f ./Dockerfile .` or
- `docker build --no-cache --platform=linux/arm64,linux/amd64 -f ./Dockerfile --push -t <docker-hub-username>/<image-name>:<tag> .`
