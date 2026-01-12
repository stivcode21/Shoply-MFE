Guia del Monorepo
=================

Resumen
-------
Este monorepo contiene un shell (host) y tres microfrontends (remotes).
El shell concentra:
- Autenticacion con Supabase Auth (AuthProvider + useAuth)
- Estado global con Redux (CartStore + SidebarStore)
- Layout base y rutas (sin proteccion/guards)

Los MFEs consumen estado/funciones del shell via Module Federation.

Apps y puertos
--------------
- shell: http://localhost:3000
- micro-login: http://localhost:3001
- micro-sidebar: http://localhost:3002
- micro-cart: http://localhost:3003

Que expone el shell
-------------------
Exposes (apps/shell/vite.config.js):
- ./AuthProvider -> apps/shell/src/auth/AuthProvider.jsx
- ./useAuth -> apps/shell/src/auth/useAuth.js
- ./CartStore -> apps/shell/src/store/cart/CartStore.js
- ./SidebarStore -> apps/shell/src/store/sidebar/SidebarStore.js
- ./storeHooks -> apps/shell/src/store/hooks.js
- ./GlobalLoader -> apps/shell/src/components/GlobalLoader.jsx

Que consume cada MFE
--------------------
micro-login:
- shell/useAuth (solo login con Supabase Auth)

micro-sidebar:
- shell/useAuth (sesion activa y cerrar sesion)
- shell/SidebarStore (categoria activa)
- shell/storeHooks (hooks Redux)

micro-cart:
- shell/CartStore (acciones/selectores del carrito)
- shell/storeHooks (hooks Redux)

Estructura del estado (Redux)
-----------------------------
CartStore (apps/shell/src/store/cart/CartStore.js):
- cartState (boolean) -> abre/cierra modal
- cartItems (array) -> items persistidos en localStorage
- cartTotalAmount (number)
- cartTotalQuantity (number)

Persistencia:
- localStorage key: "cart"

Auth (Supabase)
--------------
Cliente unico en shell:
apps/shell/src/auth/supabaseClient.js

Provider global:
apps/shell/src/auth/AuthProvider.jsx

Hook:
apps/shell/src/auth/useAuth.js

Login:
- Solo sign in (no hay sign up en UI).
- AuthProvider escucha supabase.auth.onAuthStateChange.

Perfil (nombre + avatar):
- Se lee desde la tabla public.profiles con columnas:
  - full_name
  - avatar_url
- Fallback: user.user_metadata.full_name / user.user_metadata.avatar_url.

Variables de entorno:
apps/shell/.env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

Remotes (prod/Vercel):
- VITE_MICRO_LOGIN_REMOTE
- VITE_MICRO_SIDEBAR_REMOTE
- VITE_MICRO_CART_REMOTE

Remotes (micro apps):
- VITE_SHELL_REMOTE

Cómo correr el proyecto
-----------------------
1) npm install
2) Configurar apps/shell/.env
3) npm run dev:all

Scripts utiles
--------------
- npm run dev:shell
- npm run dev:cart
- npm run dev:login
- npm run dev:sidebar

Notas
-----
- React y ReactDOM estan como singleton en Module Federation.
- El Provider de Redux vive SOLO en el shell.
- Los MFEs no deben crear clientes Supabase ni stores propios.
- La app es usable sin sesion; la UI cambia segun session activa.
