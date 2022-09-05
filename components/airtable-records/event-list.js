import EventCard from "./event-card"
import CodeBlock from "../utilities/code-block"

export default function EventList(props) {
    return (
        <div>
            <h2>Events</h2>
                <CodeBlock code={JSON.stringify(props, null, 4)} />
                {/* {props.events.map((event, i) => {
                    return (
                        <div key={i} >
                            <EventCard event={event} />
                        </div>
                    )
                })} */}
        </div>
    )
}