import { createStore } from 'redux';


const store = createStore( ( state = { count: 0, centinel: 0 }, action ) => {
  switch( action.type ){
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };

      case 'INCREMENT_CENTINEL':
        return {
          ...state,
          centinel: state.centinel + 1
        };

    default:
      return state;
  }
});

store.subscribe( () => {
  console.log(store.getState());
});


store.dispatch({
  type: 'INCREMENT_COUNT'
});

store.dispatch({
  type: 'INCREMENT_CENTINEL'
});
