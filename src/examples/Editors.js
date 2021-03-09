//CommentEditor
import { MarkdownEditor, SourceCodeEditor } from "../libraries/editors";

let Editors=()=>{
  return <>
    <h2>Editors</h2>
    <h3>Markdown Editor</h3>
    <p>
      <MarkdownEditor />
    </p>
    <hr/>

    <h3>Source Code Editor</h3>
    <p>
      <SourceCodeEditor language="python"
                        value="import this" />
    </p>
  </>;
}

export default Editors;
