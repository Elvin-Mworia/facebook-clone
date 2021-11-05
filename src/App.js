import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Widget from "./Widget.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";

//import "./Header.css";
function App() {
    // const [ user , dispatch] = useStateValue();
    const user=null;
    return (
         <div className = "App" >
       {!user ? (<Login/>):(
           <>
        <Header/>

        <div className = "app__body" >

        < Sidebar/>
        <Feed/>
        <Widget/>


        </div> 
        </>
        )}
        </div>
    );
}


export default App;