# Nome do Aplicativo
PodCast Menager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio
PodCasts feitos em vídeo

### Features
- Listar os podcasts em sessões de categorias
- [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

### Como

### Feature
- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de episódios

response: 

```js
[
{
    podcastName: 'flow'
    episode: 'CBUM - Flow #319'
    videoId: 'pQSuQmUfS30'
    cover: 'https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q'
    link: 'https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJZmxvdyBjYnVt'
    category: ['saúde', 'esporte', 'bodybuilder']
},
{
    podcastName: 'flow'
    episode: 'RUBENS BARRICHELO - Flow #339'
    videoId: '4KDGTdiOV4I'
    cover: 'https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A'
    link: 'https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUXZmxvdyBydWJlbnMgYmFycmljaGVsbG8%3D'
    category: ['esporte', 'corrida']
},
]
```

GET: retorna lista de episódios baseado em um parâmetro enviado
pelo cliente do nome do podcast