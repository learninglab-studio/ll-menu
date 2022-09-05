import ActionCard from "./action-card"
import Stringify from "../utilities/stringify"

module.exports = function ActionList(props) {
    return (
        <div>
            <h2>Actions</h2>
                {props.actions.map((action, i) => {
                    return (
                        <div key={i} >
                            <ActionCard 
                                name={action.fields.Name} 
                                notes={action.fields.Notes} 
                                assignedTo={action.fields.AssignedTo_Name.toString()} 
                                temporalStatus={action.fields.TemporalStatus}
                            />
                        </div>
                    )
                })}
        </div>
    )
}