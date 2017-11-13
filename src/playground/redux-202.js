import { createStore, combineReducers } from 'redux';

const defaultCountState = { count: 0 };
const countReducer = ( state = defaultCountState, action ) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        count: state.count + action.incrementBy
      }
      break;

    default:
      return state;
  }
};

const store = createStore( countReducer );






console.log(store.getState());


const incrementCount = ( incBy ) => ({
  type: 'INCREMENT_COUNT',
  incrementBy: typeof incBy === 'number' ? incBy : 1
});

// store.dispatch( incrementCount() );
store.dispatch( incrementCount(10) );



console.log(store.getState());
