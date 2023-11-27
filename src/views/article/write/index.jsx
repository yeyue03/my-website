import React, { useState } from "react";
import RichTextEditor from "@/components/richTextEditor/index";

import writeStyle from './write.module.less';

const Write = () => {
  const [editValue, setEditValue] = useState('');

  const handleContentChange = val => {
    setEditValue(val);
    console.log("=== editValue: ", editValue);
  }

  return (
    <main className="app-main">
      <div className={ writeStyle['write-wrap'] }>
        <RichTextEditor value={editValue} handleContentChange={handleContentChange} />
      </div>
    </main>
  )
}

export default Write;