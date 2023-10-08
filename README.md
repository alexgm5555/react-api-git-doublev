# Getting Started with Create React App

Este proyecto fue generado con [Create React App](https://github.com/facebook/create-react-app).

## Despliegue
Para el despliegue de la applicación es necesario:
1. Es recomendable haber desplegado el proyecto backEnd antes de continuar con los siguientes pasos.
```bash
https://github.com/alexgm5555/nest-api-rest-doublev.git
```
2. Clonar proyecto con el siguiente comando:
```bash
git clone https://github.com/alexgm5555/react-api-git-doublev.git
```
3. Instalar dependencias
```bash
npm  install
```
4. El proyecto lleva el archivo de variables de entorno(.env), no se recomienda esto en producción, para este caso es más útil dejarlo en el repositorio (En caso de no encontrarlo solicitarlo).
5. Si el proyecto backEnd no esta desplegado en el mismo equipo, recomendamos reemplazar la siguiente linea del archivo .env
```bash
REACT_APP_LOCAL_API="localhost:3019/api/users"
```
por la ip donde se desplegó el proyecto backend, como lo muestra el siguiente código: \
```bash
REACT_APP_LOCAL_API="http://192.168.1.13:3019/api/users"
```
para obtener esta dirección abrir una consola y ejecutar el siguiente comando:\
```ipconfig``` windows \
```ifconfig``` mac
7. levantar el proyecto con el comando
```bash
npm start
```
### Recomendaciones
1. La versión de node que se utilizó para desarrollar este proyecto fue:\
```v16.13.0```\  Recomendamos hacer el despliegè con esa versión.

## Requerimientos

Prueba Front End # 1
1. Se solicita crear la aplicación utilizando la tecnología de React
2. Recomendamos emplear un máximo de 3 (tres) horas y enviar todo lo que
puedas.
Objetivo: Crear una aplicación que ayude a obtener una lista de usuarios y
muestre la información de sus perfiles, explotando el API Rest pública de
GitHub
https://api.github.com/search/users?q=YOUR_NAME.
Requerimientos generales
1. La aplicación debe cumplir con los siguientes requisitos funcionales:
- Crear una aplicación que incluya un campo de entrada texto y un botón, para
que se pueda capturar el usuario y recuperar la información utilizando el API
anteriormente indicado.

- Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su
nombre de usuario ('user.login') y el id ('user.id') de cada registro.
- Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada
registro, navegue a una ruta que incluya la propiedad 'user.login' como
parámetro.
- Crear un componente independiente en el que se lea el parámetro de la URL,
y a continuación, obtenga los datos de dicho usuario mediante la siguiente
API: https://api.github.com/users/YOUR_NAME
- Incluir la imagen del usuario ('avatar_url') y alguna otra información (de su
elección) en el componente.

- Incluir un validador que verifique que el texto de búsqueda de usuarios sea de
un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la
palabra “doublevpartners”.
- Integrar cualquier librería de gráficos que pueda encontrar y crear un gráfico
de barras simple para mostrar el número de seguidores de los 10 primeros
usuarios.
- Incluir un componente para mostrar mensajes de error en toda la aplicación.