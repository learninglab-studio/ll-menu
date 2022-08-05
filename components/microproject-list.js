import MicroprojectCard from "./microproject-card"
import CodeBlock from "./code-block"

module.exports = function MicroprojectList(props) {
    return (
        <div>
            <h2>Microprojects</h2>
            <CodeBlock code={JSON.stringify(props.microprojects, null, 4)} />
                {/* {props.microprojects.map((mp, i) => {
                    return (
                        <div key={i} >
                            <MicroprojectCard text={mp.linkText} />
                        </div>
                    )
                })} */}
        </div>
    )
}