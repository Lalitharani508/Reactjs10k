import "./App.css"
import Banner from "./k";
import JsxRules from './components/jsxRules';
import Listrendering from './components/listrendering'

function First(){
  
  return(
    <div>
      <div id="navbar">
      <img src="https://i.pinimg.com/736x/a9/d9/f9/a9d9f9eae95f3099418d0f8c09033d63.jpg" alt="img" width="100px" height="100px"></img>
     <div class="navlinks">
      <span>home</span>
      <span>conatcts</span>
      <span>services</span>
      <span>about</span>


     </div>
     <div id="navbtns"> 
     <button>login</button>
     <button>signup</button>
     </div>

  

     
      </div>
      <Banner/>
      <JsxRules/>
      <Listrendering/>
    </div>
      
  )
  }
export default First;


// function Hello(){
//   return(
//     <div>
//       <p>hello good morning</p>
//     </div>
//   )
// }
// export {Hello};