# Task Manager

Este es el frontend de la aplicación de gestión de tareas. Permite visualizar todas las tareas, agregar una nueva y eliminar un tarea determinada. La aplicación esta desarrollada en react con Next.js y tailwindcss y esta diseñada para ser full responsive.

En pages se encuentra la página inicial que estructura los distintos componentes de components para mostrar la página en cuestión. En hooks se encuentra la lógica de negocio de las tareas y la comunicación con el backend.

Esta aplicación utiliza un .env por lo que es necesario crear un .env.local con los siguientes parametros para indicar donde se encuentra ejecutandose el backend:

```.env
NEXT_PUBLIC_HOST=http://localhost
NEXT_PUBLIC_PORT=8080
```

Para su ejecución es necesario:

```bash
npm i

npm run dev
```

Por defecto la aplicación se ejecuta en [http://localhost:3000](http://localhost:3000)
