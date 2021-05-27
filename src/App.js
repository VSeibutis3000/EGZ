import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Http from "./components/Http";
import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";


function App() {
  const [trigger, setTrigger] = useState(false)
  const [getUser, setUser] = useState({})
  const [createUserMessage, setCreateUserMessage] = useState({error: true, message: ''})
  const [allUsers, setAllUsers] = useState([])
  const [updatedUser, setUpdatedUser] = useState({error: false, message: ''})

  const renderAllUsers = () => {
    setTrigger(!trigger)
  }
  const updateIdFun = (id) => {
    Http.get('/updateuser/' + id).then(data => setUser(data))
  }
  const createNewUserFun = async (userName, age, email, password, password2) => {
    await Http.post('/createnewuser', {userName, age, email, password, password2})
        .then(data => setCreateUserMessage(data))
    await renderAllUsers()
  }
  const deleteUserFun = async (id) => {
    await Http.get(`/deleteuser/${id}`)
    await renderAllUsers()
  }
  const updateUserFun = async (userName, age, email, id) => {
    await Http.post('/updateusercreds', {userName, age, email, id})
        .then(data => setUpdatedUser(data))
    await renderAllUsers()
    await returnToMainWindow()

  }

  function returnToMainWindow() {
    if (!(updatedUser.error)) return
    setTimeout(() => window.location = '/', 2000)
  }

  useEffect(() => {
    Http.get('/showallusers').then(data => {
      setAllUsers(data)
    })
  }, [trigger])

  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <AllUsers
                  allUsers={allUsers}
                  deleteUserFun={deleteUserFun}
                  updateIdFun={updateIdFun}/>
            </Route>
            <Route path='/create_user'>
              <CreateUser createNewUserFun={createNewUserFun} createUserMessage={createUserMessage}/>
            </Route>
            <Route path='/update'>
              <UpdateUser
                  getUser={getUser}
                  updateUserFun={updateUserFun}
                  updatedUser={updatedUser}/>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
