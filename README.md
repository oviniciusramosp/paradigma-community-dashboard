# Dashboard da comunidade — Paradigma

Página estática com as métricas públicas da comunidade no Discord da
[Paradigma Education](https://paradigma.education): mensagens trocadas e
membros distintos ativos, por mês e dia a dia, com overlay opcional do
preço do bitcoin.

**Publicado em:** https://oviniciusramosp.github.io/paradigma-community-dashboard/

## Segurança

O `index.html` é só a casca do app + um blob **cifrado com AES-256-GCM**
(chave derivada da senha por PBKDF2-SHA256, 600 mil iterações). Sem a senha
não há dado nenhum legível nesta página nem neste repositório — nem histórico
de commits com dado em claro. O banco de dados e o conteúdo das mensagens
nunca saem da máquina que gera a página.

## Como é gerado

Uma rotina local (launchd, 2× ao dia) coleta do SQLite do bot, cifra e
commita o `index.html`. Este repositório contém **só a página publicada**.

Fontes: bot de captura do Discord (SQLite local) e o repositório
`bitcoin-daily-data` para o preço do BTC.
