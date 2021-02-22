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
    <div className="container">
      <div className='editDiv'>
        <textarea className="resize textarea1" id="editor" value={text} onChange={(e) => onTextUpdate(e)}></textarea>
      </div>
      <div id='preview' className='preview' dangerouslySetInnerHTML={{'__html': marked(text)}}>
      
      </div>
    </div>
  );
};

export default App;
