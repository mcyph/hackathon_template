import { MarkdownContent, SourceCodeDisplay } from "../libraries/previews";
import Python from "../libraries/previews/Python";

function Previews() {
  return <>
    <h2>Markup Rendering</h2>
    <h3>Markdown Content</h3>
    <blockquote>
      <MarkdownContent>
        Hello, `world`!!

        *Markdown content* works **inline**!
      </MarkdownContent>
    </blockquote>
    <hr/>

    <h3>Source Code Display</h3>
    <SourceCodeDisplay
        language="python"
        code={ "#!/usr/bin/python3\n\nprint('Hello World!')" }
    />

    <h3>Python Code Run (Pyodide)</h3>

    <Python />
  </>;
}

export default Previews;
