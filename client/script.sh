#!/bin/bash
chmod 666 /var/run/docker.sock
docker-compose up -d 
watch docker ps -a
yarn start