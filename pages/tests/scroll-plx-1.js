import Plx from "react-plx";

const TestElement = () => {
    return (
        <div style={{
            height: "200px",
            width: "350px",
            backgroundColor: "rgba(255, 0, 250, 0.7)"
        }}>test</div>
    )
}


export default function Test(){
    return (
        <div style={{
            margin: "auto",
            width: "500px"
        }}>
            <h1 style={{
                fontSize: "60px",
                fontWeight: "900"
            }}>test</h1>
            <TestElement />
            <div style={{
                height: "300px"
            }}></div>
            <Plx parallaxData={[
                {
                start: 0,
                end: 300,
                properties: [
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: "scale"
                    },
                    {
                    startValue: 1,
                    endValue: 0.1,
                    property: "opacity"
                  }
                ]
            }
            ]}>
            <TestElement />
            
            </Plx>
            <Plx parallaxData={[
                {
                start: 0,
                end: 300,
                properties: [
                {
                    startValue: 1,
                    endValue: .4,
                    property: "scale"
                }
                ]
            }
            ]}>
            <img src="/grit.png" />
            
            </Plx>
            <div style={{
                height: "1000px"
            }}></div>
        </div>

    )
}


