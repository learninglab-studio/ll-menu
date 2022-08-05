export default ({object}) => {
    return (
        <div style={{width: "70%", margin: "auto", color: "white"}}>
            <pre>
                {JSON.stringify(object, null, 4)}
            </pre>
        </div>
    )
}
