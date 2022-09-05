export default function Stringify ({object, data}) {
    if (object) {
        return (
            <div style={{width: "70%", margin: "auto"}}>
                <pre>
                    {JSON.stringify(object, null, 4)}
                </pre>
            </div>
        )
    } else if (data) {
        return (
            <div style={{width: "70%", margin: "auto"}}>
                <pre>
                    {JSON.stringify(data, null, 4)}
                </pre>
            </div>
        )
    }
    
}
