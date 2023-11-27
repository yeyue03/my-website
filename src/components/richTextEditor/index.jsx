import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 
function RichTextEditor(props) {
  return (
    <div>
      <ReactQuill value={props.value} onChange={props.handleContentChange} />
    </div>
  );
}
 
export default RichTextEditor;