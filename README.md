# Front Docker - dev
1.  Build docker image
    
    `docker build -t market-front:dev ./front/`

2. Run docker

    `docker run -v ${PWD}:/front/app -v /app/node_modules -p 4201:4200 --rm market-front:dev`