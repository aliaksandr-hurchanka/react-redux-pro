// This is action creator

let nextTodoId = 0
export const addService = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
  }
}
