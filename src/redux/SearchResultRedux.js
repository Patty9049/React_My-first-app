import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_SEARCHSTRING = createActionName('CHANGE_SEARCHSTRING');
// action creators
export const createAction_changeSearchString = payload => ({payload, id: shortid.generate(), type: CHANGE_SEARCHSTRING });

// reducer
export default function reducer(statePart = '', action = {}) {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_SEARCHSTRING:
      return payload;
    default:
      return statePart;
  }
}