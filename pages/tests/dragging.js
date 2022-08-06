import CopyToClipboard from "react-copy-to-clipboard";
import CopyButton from "../../components/buttons/copy-button"
import BigCopyButton from "../../components/buttons/big-copy-button";
import CardWithTexture from "../../components/cards/card-with-texture";
import Draggable from "react-draggable";
import CardToDrag from "../../components/cards/card-to-drag"

const TestElement = () => {
    return (
        <div style={{
            height: "200px",
            width: "350px",
            cursor: "grab",
            backgroundColor: "rgba(255, 0, 250, 0.7)"
        }}>test</div>
    )
}
export default function Test(){
    let markdown = `#your markdown\n\nwould go here.\n- test1\n- test2\n- test3`;
    return (
        <div>
            <h1 style={{
                fontSize: "60px",
                fontWeight: "900"
            }}>test</h1>
            <CardToDrag text="card to drag" />
            <Draggable><button style={{fontWeight: "900"}}>word</button></Draggable>
            
            <pre>{markdown}</pre>
            <CopyButton text={markdown} />
            <CardWithTexture text="test text" />
            <p>and the big one</p>
            <BigCopyButton text={`bigger markdown: ${markdown}`} />
            <Draggable>
                <div><CardWithTexture text="drag?" /></div>
            </Draggable>
            <Draggable><div style={{
            height: "200px",
            width: "350px",
            cursor: "grab",
            backgroundColor: "rgba(255, 0, 250, 0.7)"
        }}>test</div></Draggable>
            <CardWithTexture text="test text" />
            <p>what?</p>
        </div>

    )
}


