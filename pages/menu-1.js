
const myName = "Marlon"
const myListOfStuff = ["camera", "lens", "tripod", "camera bag",]
const text = `${myName}'s Stuff`


const MyList = () => {
    return (
        <ul>
                {myListOfStuff.map(
                    (e, i) => {return (
                        <li key={i}>{e}</li>
                    )}
                )}
            </ul>
    )
}

export default function Menu() {
    return (
        <div>
            <h1>the Menu</h1>
            <h3>{text}</h3>
            <MyList></MyList>
        </div>
    )
}