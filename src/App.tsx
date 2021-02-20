import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./actions/constats";
import "./App.css";
import {appState} from './types'
import marked from 'marked'

const App: React.FC = () => {

  const text = useSelector((state: appState) => state.textAreaModule.text);
  const dispatch = useDispatch();

   const onTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
      dispatch({type: actions.UPDATE_TEXT, text: e.target.value});
   }

  return (
    <div className="p-5 flex flex-wrap items-center justify-center">
      <div className='block w-full h-60 bg-red-500 flex items-center justify-center'>
        <textarea className="w-1/2 h-60 p-4 resize border rounded-md " id="editor" value={text} onChange={(e) => onTextUpdate(e)}></textarea>
      </div>
      <div id='preview' className='h-screen w-screen bg-gray-200' dangerouslySetInnerHTML={{'__html': marked(text)}}>
      
      </div>
    </div>
  );
};

export default App;
