# 💻 Programación III - Desarrollo Web Full Stack

Repositorio oficial para las prácticas, proyectos y ejercicios de la asignatura **Programación III**. El curso abarca desde los fundamentos de la maquetación web y programación del lado del cliente, hasta el tipado estricto, arquitecturas backend escalables y desarrollo frontend moderno con librerías reactivas.

---

## 🚀 Contenido y Conceptos Clave

### 1. 🌐 HTML5 (HyperText Markup Language)
El estándar de estructura para la web moderna.
* **HTML Semántico:** Uso correcto de etiquetas (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) para mejorar la accesibilidad (a11y) y el SEO.
* **Formularios y Validación:** Entradas estructuradas (`input`, `select`, `textarea`), atributos de validación nativos (`pattern`, `required`, `min`, `max`).
* **Multimedia y APIs Nativas:** Integración de audio, video, canvas y APIs web estándar (DOM, LocalStorage).

### 2. 🎨 CSS3 (Cascading Style Sheets)
Mecanismos de estilizado, maquetación y diseño adaptable.
* **Modelo de Caja (Box Model):** Márgenes, bordes, rellenos (*padding*) y contenido; `box-sizing: border-box`.
* **Diseño Responsivo (Responsive Design):** Mobile-first, media queries y unidades relativas (`rem`, `em`, `vw`, `vh`, `%`).
* **Layouts Modernos:**
  * **Flexbox:** Distribución unidimensional (ejes principal y transversal, alineación y justificación).
  * **CSS Grid:** Sistemas de cuadrícula bidimensionales, áreas y plantillas.
* **Variables CSS (Custom Properties):** Reutilización y gestión de temas consistentes.

### 3. ⚡ JavaScript (ES6+)
Lenguaje principal de la web enfocado en dinamismo e interactividad.
* **Fundamentos Modernos:** `let`, `const`, destructuración, rest/spread operators, módulos ES (`import`/`export`).
* **Manipulación del DOM y Eventos:** Selección de nodos, propagación de eventos (*bubbling/capturing*), delegación de eventos.
* **Asincronía en JS:** Event Loop, Callback Queue, Promesas (`Promise`) y sintaxis `async`/`await`.
* **Manejo de APIs:** Peticiones HTTP asíncronas con la API `fetch` y consumo de servicios RESTful.

### 4. 🔷 TypeScript
Superconjunto tipado de JavaScript que añade seguridad en tiempo de compilación.
* **Tipos Básicos y Compuestos:** Tipado estático, uniones (`|`), intersecciones (`&`), `any` vs `unknown`.
* **Interfaces vs Types:** Definición de contratos de datos y tipado de objetos.
* **Genéricos (Generics):** Creación de funciones y estructuras de datos reutilizables y con tipado dinámico seguro.
* **Configuración del Compilador:** Estructura y opciones de `tsconfig.json`.

### 5. 🐱 NestJS
Framework progresivo de Node.js para la construcción de backends eficientes, confiables y escalables.
* **Arquitectura Modular:** Separación de responsabilidades mediante Módulos (`@Module`), Controladores (`@Controller`) y Proveedores/Servicios (`@Injectable`).
* **Inyección de Dependencias (DI):** Principio de inversión de control para desacoplar componentes y facilitar pruebas.
* **DTOs y Validación:** Data Transfer Objects con `class-validator` y `class-transformer` para sanitizar y verificar entradas HTTP.
* **Manejo de Rutas y Middleware:** Interceptores, guardias de autenticación (*Guards*) y filtros de excepciones.

### 6. ⚛️ React
Librería declarativa y basada en componentes para construir interfaces de usuario reactivas.
* **Arquitectura de Componentes:** Componentes funcionales, paso de propiedades (`props`) y modularización de UI.
* **Hooks Principales:**
  * `useState`: Manejo del estado local reactivo.
  * `useEffect`: Ciclo de vida y efectos secundarios (llamadas a APIs, suscripciones).
* **Renderizado Condicional y Listas:** Uso de operadores ternarios y renderizado dinámico con `map()` usando `key` únicas.
* **Gestión de Estado y Flujo de Datos:** Estado unidireccional y comunicación entre componentes.

---

## 🛠️ Tecnologías y Herramientas

| Categoría | Tecnología |
| :--- | :--- |
| **Frontend Base** | HTML5, CSS3, JavaScript (ESNext) |
| **Tipado & Lenguaje** | TypeScript |
| **Librería Frontend** | React |
| **Backend & APIs** | NestJS, Node.js |
| **Control de Versiones** | Git & GitHub |

---

## 📁 Estructura del Repositorio

```text
├── 01-html-css/         # Prácticas de maquetación, Flexbox y Grid
├── 02-javascript/       # Ejercicios de lógica, manipulación de DOM y APIs
├── 03-typescript/       # Tipado, interfaces y programación con TS
├── 04-react/            # Componentes, hooks y proyectos de frontend
├── 05-nestjs-backend/   # Arquitectura backend, controladores y servicios
└── README.md
