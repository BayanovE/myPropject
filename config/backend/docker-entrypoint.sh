#!/bin/bash

source ~/.profile
cd /var/www/backend

npm install -g nodemon
yarn
yarn migrate-up

yarn watch
