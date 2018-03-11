export const upVote = (id) => ({
  type: 'UP_VOTE',
  id
})

export const downVote = (id) => ({
  type: 'DOWN_VOTE',
  id
})

export const next = () => ({
  type: 'NEXT'
})

export const prev = () => ({
  type: 'PREV'
})

export const play = (id) => ({
  type: 'PLAY',
  id
})