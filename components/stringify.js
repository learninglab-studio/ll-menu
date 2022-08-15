export default function Stringify ({object}) {
    return (
        <div style={{width: "70%", margin: "auto"}}>
            <pre>
                {JSON.stringify(object, null, 4)}
            </pre>
        </div>
    )
}
