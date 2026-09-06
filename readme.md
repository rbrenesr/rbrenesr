# Rafael Brenes · Sitio personal

Espacio de expresión personal para rafaelbrenes.com: conocer a Rafael hoy, acercarse a su historia y a lo que va entendiendo, y acceder a su faceta profesional. El texto es el protagonista; la tipografía aporta un carácter literario sin decoración temática.

## Navegación y estructura

1. Inicio: bienvenida y orientación.
2. Mi presente: etapa actual, intereses y aprendizajes.
3. Mi historia: biografía por capítulos.
4. Lo que voy aprendiendo: reflexiones personales.
5. Mi trabajo: experiencia, formación, proyectos y CV.

```text
contenido.md             Guía editorial privada; no genera páginas
readme.md                Este documento
WebPage/                 ÚNICA carpeta que se publica
  index.html             Inicio
  presente/index.html    Mi presente
  historia/index.html    Mi historia
  reflexiones/index.html Lo que voy aprendiendo
  trabajo/index.html     Mi trabajo
  css/main.css           Diseño y variables de tipografía
  scripts/main.js        Menú móvil progresivo
  images/rafael.jpg       Retrato existente
  assets/                CV público anterior y fuentes con licencia
Biography/index.html     Acceso de compatibilidad a Mi historia
ProfessionalProfile/     Documentos originales; no publicar
archivo/template-anterior/  Copia de la plantilla y recursos anteriores; no publicar
comparacion/             Dos variantes temporales; no publicar
```

HTML y CSS estáticos, sin compilación, dependencias de JavaScript ni servicios externos. Cada página contiene la misma cabecera y pie; si cambia el menú, actualizar las cinco páginas. JavaScript solo pliega el menú en móviles; sin él la navegación permanece visible.

## Escribir y actualizar

1. Completar `contenido.md`, confirmar los datos señalados y marcar el texto listo para trasladar.
2. Copiar solo la redacción aprobada al `<main>` de su HTML. Guardar en UTF-8 y mantener etiquetas semánticas de párrafo y títulos.
3. Reemplazar el aviso de contenido pendiente cuando exista texto real. No copiar notas privadas ni ejemplos.
4. Para añadir un capítulo, crear `WebPage/historia/nombre-del-capitulo/index.html` (o equivalente en reflexiones), reutilizar cabecera/pie y usar `../../` para llegar a estilos y navegación. Enlazarlo desde el índice de su sección.
5. Revisar título, descripción, enlaces, móvil y navegación por teclado. Las imágenes nuevas deben incluir texto alternativo; no publicar datos EXIF personales innecesarios.

Los textos de apertura actuales son breves presentaciones basadas en el objetivo acordado; Rafael conserva la autoría de sus relatos y reflexiones. Datos inciertos e intereses históricos quedan en la guía. El CV mantiene el archivo previamente público, con aviso de versión anterior. Sustituirlo cuando Rafael seleccione la versión definitiva.

## Vista previa local

Desde la raíz, con Python instalado:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8000/WebPage/` para el sitio y `http://127.0.0.1:8000/comparacion/` para las variantes. Detener el servidor con Ctrl+C. También se puede abrir `WebPage/index.html` directamente: los enlaces apuntan explícitamente a archivos index.html.

Para simular el alojamiento final, servir solo `WebPage`:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory WebPage
```

## Cambiar la fuente y el estilo

En `WebPage/css/main.css`, editar únicamente estas variables para cambiar toda la tipografía:

```css
:root {
  --font-body: "EB Garamond", Georgia, serif;
  --font-heading: var(--font-body);
}
```

Por ejemplo, usar `--font-body: Georgia, serif;` cambia el sitio sin tocar los textos. Se pueden configurar los títulos por separado. Colores en `--paper`, `--ink`, `--muted`, `--accent`, `--line`; ancho de lectura en `--measure` (65ch).

EB Garamond se sirve localmente, regular e itálica, con `font-display: swap` y respaldo Georgia. Fuente original: https://github.com/google/fonts/tree/main/ofl/ebgaramond . Licencia SIL OFL incluida en `WebPage/assets/fonts/OFL.txt`. No hay solicitudes a Google Fonts desde el navegador.

## Comparaciones temporales

- A: EB Garamond, fotografía vertical y composición aplicada al sitio.
- B: Georgia, fotografía más pequeña y cuadrada.
- Cada variante incluye Inicio, Mi presente y Mi historia con el mismo contenido. La navegación global conduce al sitio real; volver al índice de comparación para elegir otra muestra.
- Todas tienen `noindex,nofollow`, pero la protección efectiva es excluir `comparacion` de publicación. No hay enlaces hacia ellas desde el sitio.

## Publicación y compatibilidad

Publicar **solo el contenido de WebPage** en la raíz del alojamiento o una subcarpeta. Nunca subir la raíz completa del repositorio: contiene borradores, CV de respaldo y certificados. No se ha desplegado ni cambiado la configuración del dominio.

`Biography/index.html` funciona como puente al usar el repositorio local completo. Si el alojamiento anterior exponía `/Biography/`, configurar allí una redirección a `/historia/` al desplegar; publicar solo WebPage no instala automáticamente ese puente. Los antiguos enlaces internos de la plantilla a #about, #skill, etc. no forman parte de la nueva navegación.

## Comprobación de cambios

Revisar las cinco páginas en escritorio y móvil, menú con teclado y Escape, foco visible, zoom 200 %, ausencia de desplazamiento horizontal, carga sin JavaScript, fuente de respaldo, enlaces relativos y descarga del PDF. Comprobar que ningún documento privado está dentro de WebPage.

La versión anterior permanece en `archivo/template-anterior`, con su licencia, para consulta y recuperación. Los originales profesionales se conservan intactos. Rama de trabajo: NewDesign. No se realiza commit, push ni publicación como parte de esta renovación.

## Añadir una reflexión

1. Completar título, descripción breve y texto completo en la sección 4 de `contenido.md`.
2. Para la primera entrada, editar `WebPage/reflexiones/primera-reflexion/index.html`. Para las siguientes, copiar `plantillas/reflexion.html` a `WebPage/reflexiones/nombre-corto/index.html`. La plantilla está preparada para esa profundidad; no se abre como página pública desde plantillas.
3. Sustituir título de pestaña, descripción de metadatos, h1, descripción visible y párrafos del cuerpo. Quitar «Por escribir» y la etiqueta `meta name="robots"` con noindex únicamente cuando el texto esté listo. La fecha puede omitirse o añadirse con `<time datetime="AAAA-MM-DD">fecha legible</time>`.
4. En `WebPage/reflexiones/index.html`, duplicar el bloque `article.reflection-preview` y completar enlace, título y descripción. Para la primera, reemplazar el bloque reservado existente. Ordenar manualmente las entradas, colocando las más recientes primero.
5. Verificar el clic desde el listado y los enlaces de regreso, también en móvil. No trasladar campos entre corchetes a la web pública.

La plantilla editorial permanece fuera de WebPage. El artículo reservado contiene únicamente un aviso honesto de contenido pendiente y está marcado noindex. Las reflexiones completas comparten el diseño y la fuente del resto del sitio.
