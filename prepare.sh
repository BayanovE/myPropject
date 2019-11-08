#!/bin/bash

set -e

cp config/backend/.env.example config/backend/.env
cp config/frontend/.env.example config/frontend/.env

cd source

cd frontend
docker build -t myproject/frontend .
cd ..

cd backend
docker build -t myproject/backend .