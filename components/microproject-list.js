import MicroprojectCard from "./microproject-card"

module.exports = function ActionList(props) {
    return (
        <div>
            <h2>Microprojects</h2>
                {props.microprojects.map((mp, i) => {
                    return (
                        <div key={i} >
                            <MicroprojectCard text={mp.linkText} />
                        </div>
                    )
                })}
        </div>
    )
}