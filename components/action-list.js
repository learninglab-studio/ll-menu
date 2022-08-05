import ActionCard from "./action-card"

module.exports = function ActionList(props) {
    return (
        <div>
            <h2>Actions</h2>
                {props.actions.map((action, i) => {
                    return (
                        <div key={i} >
                            <ActionCard text={action.linkText} />
                        </div>
                    )
                })}
        </div>
    )
}