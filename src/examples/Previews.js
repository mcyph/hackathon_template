import MarkdownContent from "../libraries/previews/MarkdownContent";
import MediaURLPlayer from "../libraries/previews/MediaURLPlayer";
import SourceCodeDisplay from "../libraries/previews/SourceCodeDisplay";
import WikiPreview from "../libraries/previews/WikiPreview";

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
  </>;
}

export default Previews;
