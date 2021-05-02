# docker-tutorial

# Build Image
`docker build -t [NAME_OF_IMAGE] [PATH_OF_DOCKERFILE]`
# To List all the images
  `docker image ls`

# To delete image
  `docker image rm [IMAGE_ID]`
# RUN CONTAINER
`docker run -d --name [CONTAINER_NAME] [IMAGE_NAME]`

# Delete Container Forcefully
`docker rm docker-tutorial -f`

# RUN CONTAINER
`docker run -p [LISTENING_ON_HOST_PORT]:[PORT_EXPOSED_FROM_IMAGE] -d --name docker-tutorial docker-tutorial-image`

# TO LOGIN INTO DOCKER CONTAINER
  `docker exec -it [CONTAINER_NAME] bash`

# TO EXIT FROM DOCKET BASH
  `exist`

# shared volume development
  `-v => volume`

  `docker run -v [FOLDER_PATH_TO_LOCAL]:/[FOLDER_PATH_TO_CONTAINER] -p 3000:3000 -d --name docker-tutorial docker-tutorial-image`

  `docker run -v /Users/anilkumar/Documents/projects/personal/docker/docker-tutorial:/app -v /app/node_modules -p 3000:3000 -d --name docker-tutorial docker-tutorial-image`

  # READ ONLY BIND MODE

  `docker run -v /Users/anilkumar/Documents/projects/personal/docker/docker-tutorial:/app:ro -v /app/node_modules -p 3000:3000 -d --name docker-tutorial docker-tutorial-image`

  # ENV VARIABLES OVERRIDING
  `docker run -v /Users/anilkumar/Documents/projects/personal/docker/docker-tutorial:/app:ro -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name docker-tutorial docker-tutorial-image `

  # WE CAN SPECIFY MULTIPLE ENV VARS USING --env PORT=4000 --env SECRET=XXX BUT IT IS BIT DIFFICULT TO MANAGE, IF WE HAVE MULTIPLE VARIABLE WE CAN CREATE .env FILE AND SPECIFY ALL THE VARIABLES INSIDE IT AND THEN LOAD .env FILE USING FOLLOWING COMMAND

  `docker run -v /Users/anilkumar/Documents/projects/personal/docker/docker-tutorial:/app:ro -v /app/node_modules --env-file ./.env -p 3000:4000 -d --name docker-tutorial docker-tutorial-image`

  # LIST DOCKER VOLUMES

  `docker volume ls`

  # DELETE UNNECESSARY DOCKER VOLUMES
  `docker volume prune`

  # DELETE VOLUME WHILE DELETING CONTAINER
  `docker rm docker-tutorial -fv`
  
  `docker-compose up -d`
  `docker-compose down -v`

  # REBUILD DOCKER IMAGE AFTER CHANGES IN DOCKERFILE
  `docker-compose up -d --build`

  # ENV SPECIFIC
  `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
# delete volumes as well

   `docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v`


   `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`
   
   `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`
   