import { useEffect, useState } from "react";
import "../scss/App.scss";
import getDataFromApi from "../services/api";
import ListUser from "./ListUser";


function App() {
  const [listUsers, setListUser] = useState([])

  useEffect(() => {
    getDataFromApi().then((newArray) => { setListUser(newArray) })
  }, [])

  return ( 
    <>
      <ListUser listUsers={listUsers} />
    </>
  )
}

export default App
