Microfront Shoply
=================

Monorepo de microfrontends con Vite + Module Federation. El shell centraliza
autenticacion (Supabase) y el estado global (Redux) para que los MFEs solo
consuman lo necesario. Incluye un carrito remoto con modal derecho y un login
remoto.

Apps
----
- shell (host) -> http://localhost:3000
- micro-login (remote) -> http://localhost:3001
- micro-sidebar (remote) -> http://localhost:3002
- micro-cart (remote) -> http://localhost:3003

Tecnologias
-----------
- React 19
- Vite + @module-federation/vite
- Tailwind CSS v4
- Redux Toolkit + React Redux (estado global)
- Supabase (auth)

Como iniciar rapido
------------------
1) Instalar dependencias
   npm install

2) Configurar Supabase (solo shell)
   Edita apps/shell/.env:
   VITE_SUPABASE_URL=
   VITE_SUPABASE_ANON_KEY=

3) Levantar todo
   npm run dev:all

Si quieres levantar solo el shell:
   npm run dev:shell

Nota: el shell depende de los remotes. Si un remote no esta levantado, veras
loaders/fallbacks en la UI.

Estructura general
------------------
apps/
  shell/
  micro-login/
  micro-sidebar/
  micro-cart/
docs/

Dependencias esenciales
-----------------------
- @reduxjs/toolkit y react-redux en shell (store global)
- @supabase/supabase-js en shell (auth global)
- lucide-react (iconos)

Documentacion detallada
-----------------------
Ver docs/README.md
