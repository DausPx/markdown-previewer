import { actions } from '../actions/constats';

const initialState: {text:string} = {
    text: 'this is state',
  }

  export const textArea = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actions.UPDATE_TEXT:
        return{
          ...state,
          text: action.text
        }
      case actions.GET_TEXT:
        return{
          ...state
        }
      default:
        return {
          ...state
        }
    }
  };