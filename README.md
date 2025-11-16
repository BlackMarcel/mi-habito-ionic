👤 8. Autor

Iván Pareja
UNIACC – 2025
Proyecto académico – Unidad 3
Aplicación: Mi Hábito

---

📱 Mi Hábito – Cáscara de Navegación (Ionic 7)

Proyecto desarrollado para la Unidad 3, que implementa la cáscara de navegación de la app Mi Hábito utilizando Ionic 7 y Angular (Standalone Components).
En esta etapa solo se construye la interfaz, el diseño visual y la navegación entre pantallas, sin lógica funcional.

---

🚀 Pantallas Implementadas

-Home / Login
Inputs simulados y acceso al Dashboard.

-Dashboard
Panel visual del hábito actual y navegación a las demás secciones.

-Detalle de Hábito
Información simulada del hábito, meta diaria y barra de progreso.

-Estadísticas
Gráfico simulado y resumen semanal.

-Logros / Insignias
Lista de insignias con iconos y descripciones.

-Configuración
Opciones básicas simuladas (cuenta, notificaciones, etc.).

---

Todas las pantallas mantienen un diseño consistente basado en:

-Fondo menta claro

-Marco de celular

-Notch

-Tarjetas y botones redondeados

-Menú inferior de navegación

---
🧭 2. Mapa de Navegación Implementado
/home

Pantalla de entrada que muestra:

Título “Mi Hábito”

Inputs simulados de correo y contraseña

Botón Iniciar Sesión → redirige a Dashboard

Botón Crear cuenta (no funcional)

---
🛠️ Tecnologías

-Ionic 7.2.1

-Angular Standalone Components

-TypeScript

-HTML / SCSS

---

📦 Instalación

Requisitos:

-Node.js LTS

-Ionic CLI:

```
npm install -g @ionic/cli

```
Instalación del proyecto:

```
npm install

```

▶️ Ejecutar

```
ionic serve

```

Acceder en:

```
http://localhost:8100/
```
---

🧩 6. Problemas Enfrentados y Soluciones
✔️ Estilos inconsistentes

Las pantallas mostraban el diseño por defecto de Ionic.
Solución: sobrescritura completa del HTML y SCSS según mockups.

✔️ Errores de navegación (TS2339)

Aparecían errores porque los métodos llamados desde el HTML no existían.
Solución: creación de todos los métodos de navegación en cada página.

✔️ Rutas con errores

El router daba problemas con los módulos tradicionales.
Solución: Migración 100% a Standalone Components y loadComponent.

✔️ Layout distinto entre pantallas

Cada vista tenía estilos diferentes.
Solución: creación de un layout uniforme con marco, notch y fondo.




