import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName(ADD_COLUMN);

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload}, id: shortid.generate(), type: ADD_COLUMN });

// reducer       NAME CHANGED !!! (reducer=> columnsReducer-do nazwy ze store)



export default function reducer(state = [], action ={}) {
  const {type, payload} = action;
  switch (type) {
    case ADD_COLUMN:
      return [...state, payload];
    default:
      return state;
  }
}