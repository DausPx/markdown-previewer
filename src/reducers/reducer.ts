import { actions } from '../actions/constats';

const initialState: {text:string , author:string} = {
    text: '',
    author: ''
  }

  export const quote = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actions.RANDOM_ACTION:
        return{
          ...state,
          text: action.data.content,
          author: action.data.author
        }
      default:
        return {
          ...state
        }
    }
  };