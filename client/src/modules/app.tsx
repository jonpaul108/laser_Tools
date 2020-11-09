import React, { useState, useEffect, useRef } from "react";
//import styled from 'styled-components'
 
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";
//import MonacoEditor from "../../../node_modules/react-monaco-editor/lib/index";
 
//import examples from "./examples";
 
function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);
 const [val, setVal] = useState('//code here');
 const valueGetter = useRef();


  function handleEditorDidMount(_valueGetter: any) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter
  }
 
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
 
  function toggleLanguage() {
    setLanguage(language === "javascript" ? "python" : "javascript");
  }

  function monacoOnchange(code: string) {
    setVal(code);
    console.log('code Update:', val);
  };

  function handleShowValue() {
    console.log(valueGetter.current());
  }

 

 console.log(Editor);
  return (
    <>
      <button onClick={toggleTheme} disabled={!isEditorReady}>
        Toggle theme
      </button>
      <button onClick={toggleLanguage} disabled={!isEditorReady}>
        Toggle language
      </button>
      <button onClick={handleShowValue}>Show Value</button>
      <Editor
        height="90vh" // By default, it fully fits with its parent
        theme={theme}
        language={language}
        loading={<Loader />}
        value={val}
        editorDidMount={handleEditorDidMount}
        onChange={monacoOnchange}
        options={{ lineNumbers: "on" }}
      />
    </>
  );
}

export default App;