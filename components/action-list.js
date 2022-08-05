import ActionCard from "./action-card"
import Stringify from "./stringify"

module.exports = function ActionList(props) {
    return (
        <div>
            <h2>Actions</h2>
                {props.actions.map((action, i) => {
                    return (
                        <div key={i} >
                            <ActionCard action={action} />
                        </div>
                    )
                })}
            <Stringify object={props} />
        </div>
    )
}