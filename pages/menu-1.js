
const myName = "Marlon"
const myListOfStuff = ["camera", "lens", "tripod", "camera bag",]

const MyList = () => {
    return (
        <ul>
                {myListOfStuff.map(
                    e => {return (
                        <li>{e}</li>
                    )}
                )}
            </ul>
    )
}

export default function Menu() {
    return (
        <div>
            <h1>the Menu</h1>
            <h3>{myName}'s Stuff</h3>
            <MyList></MyList>
        </div>
    )
}