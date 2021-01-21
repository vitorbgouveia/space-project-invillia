cd ./space-api && npm i
cd ../auth-api && npm i
cd ../space-app && npm i

cd ..

cp ./space-api/.env-example ./space-api/.env
cp ./auth-api/.env-example ./auth-api/.env

docker-compose up