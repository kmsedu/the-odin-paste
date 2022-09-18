import React, {ChangeEvent, useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {githubDark, githubLight} from '@uiw/codemirror-theme-github';
import {javascript} from '@codemirror/lang-javascript';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {markdown} from '@codemirror/lang-markdown';
import {StreamLanguage} from '@codemirror/language';
import {ruby} from '@codemirror/legacy-modes/mode/ruby';

function CodeEditor() {
  const [editorLanguage, setEditorLanguage] = useState('js');
  const [editorValue, setEditorValue] = useState('Enter your code here...');

  function handleChange(value: string) {
    setEditorValue(value);
  }

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const {value} = event.target;

    setEditorLanguage(value);
  }

  function getLanguage(langString: string) {
    switch (langString) {
      case 'js':
        return javascript({jsx: true});
      case 'ruby':
        return StreamLanguage.define(ruby);
      case 'html':
        return html();
      case 'css':
        return css();
      case 'markdown':
        return markdown();
      default:
        return javascript({jsx: true});
    }
  }

  return (
    <div>
      <div>
        <span>Select your language: </span>
        <select onChange={handleLanguageChange}>
          <option value="js">JavaScript</option>
          <option value="ruby">Ruby</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="markdown">Markdown</option>
        </select>
      </div>
      <CodeMirror
        value={editorValue}
        height="500px"
        theme={githubLight}
        extensions={[getLanguage(editorLanguage)]}
        className="text-[10pt]"
        onChange={handleChange}
      />
    </div>
  );
}

export {CodeEditor};
