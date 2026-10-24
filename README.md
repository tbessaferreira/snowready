# SnowReady PWA

## Publicar
A app precisa de ser servida por HTTPS para instalação e modo offline. Carregue todos os ficheiros desta pasta para um serviço de alojamento estático (GitHub Pages, Netlify, Cloudflare Pages ou equivalente).

## Teste local
Na pasta da app: `python3 -m http.server 8080` e abra `http://localhost:8080`. O service worker pode funcionar em localhost.

## iPhone/iPad
Abra o endereço publicado no Safari → Partilhar → Adicionar ao ecrã principal.

O progresso é guardado localmente no dispositivo através de localStorage.
