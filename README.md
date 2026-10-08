# Daniel Amin Mouimi Romero — Portfolio

Portfolio profesional dinámico y responsive desarrollado con **React + Vite**.

## 🚀 Arrancar en local

```bash
npm install
npm run dev
```

## 📦 Construir para producción

```bash
npm run build
npm run preview   # verificación local del build
```

La carpeta `dist/` es lo que debes subir a tu hosting.

## ☁️ Despliegue (elige uno)

| Hosting | Pasos |
|---|---|
| **GitHub Pages** | Sube el proyecto a un repo, usa Actions con `actions/upload-pages-artifact` apuntando a `dist/`, o arrastra el contenido de `dist/` a la rama `gh-pages`. `vite.config.js` ya tiene `base: './'` para subcarpetas. |
| **Netlify** | Arrastra la carpeta `dist/` en [app.netlify.com/drop](https://app.netlify.com/drop), o conecta el repo con build command `npm run build` y publish directory `dist`. |
| **Vercel** | Importa el repo: framework **Vite**, build `npm run build`, output `dist`. |

## 🧾 Personalización

- **Todo el contenido** (textos, experiencia, skills, proyectos) vive en `src/data/profile.js`.
- **Colores y tema**: variables en `:root` de `src/styles.css`.
- **CV descargable**: copia tu PDF a `public/cv.pdf` y el botón "Descargar CV" funcionará.
- **Proyectos**: se cargan en tiempo real desde la API pública de GitHub (`githubUser` en `profile.js`).
