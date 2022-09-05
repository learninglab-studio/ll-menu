import MicroprojectCard from "./microproject-card"
import CodeBlock from "../utilities/code-block"

module.exports = function MicroprojectList(props) {
    return (
        <div>
            <h2>Microprojects</h2>
            {props.microprojects.map((mp, i) => {
                return (
                    <div key={i} >
                        <MicroprojectCard mp={mp} />
                    </div>
                )
            })}
        </div>
    )
}