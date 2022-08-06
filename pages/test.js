import BigCopyButton from "../components/buttons/big-copy-button";

export default function Test(){
    let markdown = `#your markdown\n\nwould go here.\n- test1\n- test2\n- test3`;
    return (
        <div>
            <h1 style={{
                fontSize: "60px",
                fontWeight: "900"
            }}>test</h1>
            
            <BigCopyButton text={`bigger markdown: ${markdown}`} />
            
        </div>

    )
}


