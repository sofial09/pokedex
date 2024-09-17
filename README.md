<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

#Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado 
```
npm i -g @nestjs/cli
```
4. Comando para correr el servidor 
```
yarn: start:dev
```
5. Comando para levantar base de datos
```
docker-compose up -d
```
6. Comando para crear un modulo
```
nest g mo common
```
7. Comando para crear pipes
```
nest g pi common/pipes/parseMongoId
```
8. Comando para crear seed
```
nest g res seed --no-spec
```
9. Reconstruir la bd con seed
```
http://localhost:3000/api/seed
```
10. Clonar el archivo .env.template y renombrar la copia a .env
```
11. Ejecutar la aplicación en dev
yarn run start:dev  
```