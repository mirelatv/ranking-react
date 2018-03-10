# Ejercicio React: Ranking

## Árbol de componentes

```
Componente general
  |
  |--Componente reproductor
  |     |--Componente button slide
  |     |--Componente imagen actual
  |
  |--Componente lista de canciones
```

## Reconocimiento de estados

```js
State: {
  canciones: [
    {
      name: 'A',
      autor: 'Aaa Bbb',
      id: 0,
      votos: 15
    },
    {
      name: 'A',
      autor: 'Aaa Bbb',
      id: 1,
      votos: 20
    },
    {
      name: 'A',
      autor: 'Aaa Bbb',
      id: 2,
      votos: 35
    },
    {
      name: 'A',
      autor: 'Aaa Bbb',
      id: 3,
      votos: 50
    }
  ],
  idActual: 2
}
```

## Actions

```js
{
  {
    type: 'UP_VOTE',
    id: 3
  },
  {
    type: 'DOWN_VOTE',
    id: 2
  },
  {
    type: 'NEXT'
  },
  {
    type: 'PREV'
  },
  {
    type: 'PLAY'
  }
}
```

## Reducers