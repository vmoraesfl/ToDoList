export const Types = {
  ADD: "todos/ADD",
  TOGGLE: "todos/TOGGLE",
  REMOVE: "todosREMOVE",
  /*   DESCRIPTION: "todos/DESCRIPTION",
   */
};

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          description: action.payload.description,
          complete: false,
        },
      ];
    case Types.TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case Types.REMOVE:
      return state.filter((todo) => todo.id !== action.payload.id);
    /* case Types.DESCRIPTION:
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, complete: false },
      ]; */
    default:
      return state;
  }
}

export const Creators = {
  addTodo: (text, description) => ({
    type: Types.ADD,
    payload: {
      text,
      description,
    },
  }),
  /* addTodoDescription: (text) => ({
    type: Types.DESCRIPTION,
    payload: {
      text,
    },
  }), */
  toggleTodo: (id) => ({
    type: Types.TOGGLE,
    payload: {
      id,
    },
  }),
  removeTodo: (id) => ({
    type: Types.REMOVE,
    payload: {
      id,
    },
  }),
};
