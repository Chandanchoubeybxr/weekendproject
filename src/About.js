import { Fragment } from "react"
const a = 50;
let c = "red";

function Aboutpage()
{
    return(
        <Fragment>
        <h1>this is first <h2>heading two</h2> page</h1>
        <h2 className="xyz">sdfhsjdfhjsdf</h2>
        <h3 style={{color:'blue',backgroundColor:'green',fontSize:a,border:`10px solid ${c}`}}>this is inline css in react js</h3>

        </Fragment>
    )
}
export default Aboutpage

