import "./App.css";
import Welcome from "./components/Welcome";
import Hooks from "./components/Hooks";
const App = () => {

  
  // const greeting = "Hello, React!";
  // () = JSX
  // {} = JS Code



  return (
    <div>
      {
        //ternary operator
        // conditional formatting (? and :)
        isUserLoggedIn 
        ? <h1>Logged In!</h1>
        : <h1>Not Logged In!</h1>
      }

      {
        /* <h1>{greeting}</h1>
      <Welcome  name="MIKO"/>
      <Welcome  name="Mark"/> */

        // conditional formatting (&&)
        isUserLoggedIn && (
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
          </ul>
        )
      }
      {
        // conditional formatting (&&)
        isUserLoggedIn && (
          <ul>
            {
              // mapping
              userList.map((user) => (
                <li key={user}>{user}</li>
              ))
            }
          </ul>
        )
      }
      <Hooks />
    </div>
  )

}

export default App;