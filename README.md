# Sitio web | Healthy Catching

[![Netlify Status](https://api.netlify.com/api/v1/badges/6dc5fd71-8719-4c77-a52f-79d334fb6ce4/deploy-status)](https://app.netlify.com/sites/catchithealthy/deploys)
![GitHub package.json version](https://img.shields.io/github/package-json/v/alexazumi/healthy-catching-web.svg?style=popout)
![GitHub repo size](https://img.shields.io/github/repo-size/alexazumi/healthy-catching-web.svg?style=popout)

<p align="center">
  <img src="/src/assets/img/fruits/apple.png" alt="Logo" width="250px">
</p>

## Requerimientos
- Git CLI (o alguna manera para clonar el repositorio)
- Angular CLI 7.3.4 o más reciente
- npm 6.4.1

## Clonar repositorio
Primero es necesario clonar el repositorio a tu equipo y entrar a la carpeta del proyecto
```
git clone https://github.com/AlexAzumi/healthy-catching-web.git
cd healthy-catching-web
```

## Instalar dependencias
Para poder continuar, es necesario instalar las dependencias del proyecto
```
npm install
```

## Compilar hoja de estilos
Ahora, una vez instaladas las dependencias, toca compilar la hoja de estilos
```
npm run sass
```
*También puede usar `npm run sass:watch` para vigilar los cambios*

## Ejecutar servidor local de desarrollo
Ya que realizamos los pasos anteriores podemos ejecutar el servidor de desarrollo
```
ng serve --open
```
*El atributo `--open` indica que se abra la página automáticamente después de ser compilada*

## Compilar para producción
Si deseas obtener la página para producción puedes usar el siguiente comando
```
npm run build
```
Podrás encontrar los archivos de producción en la carpeta `/dist`

*Nota: Este comando también compila la hoja de estilos*
