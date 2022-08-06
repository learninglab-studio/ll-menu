import CopyToClipboard from "react-copy-to-clipboard";
import CopyButton from "../components/buttons/copy-button"
import BigCopyButton from "../components/buttons/big-copy-button";

export default function Test(){
    let markdown = `#your markdown\n\nwould go here.\n- test1\n- test2\n- test3`;
    return (
        <div>
            <h1 style={{
                fontSize: "60px",
                fontWeight: "900"
            }}>test</h1>
            <button style={{fontWeight: "900"}}>word</button>
            <pre>{markdown}</pre>
            <CopyButton text={markdown} />
            <p>and the big one</p>
            <BigCopyButton text={`bigger markdown: ${markdown}`} />
        </div>

    )
}


