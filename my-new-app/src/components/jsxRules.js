// function JsxRules(){
//     return(
//         <p>hiii</p>
//     )

// }
// export default JsxRules;
import './jsxRules.css';
const JsxRules=()=>{
 const details={
    name:"lalitha",
    age:22,
    location:"Andhra pradesh",
    profession:"student"
 }
 
    return( 
      <div>
            <p>i am {details.name}</p>
          <h1 className="ptag">hello react classes</h1>
          <p>this is p tag</p>
      </div>

    )
}
export default JsxRules;