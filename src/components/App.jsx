import { useEffect, useState } from "react";
import "../scss/App.scss";
import getDataFromApi from "../services/api";
import ListUser from "./ListUser";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import DetailUser from "./DetailUser";


function App() {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    getDataFromApi().then((newArray) => { setListUsers(newArray) })
  }, [])
  
  const { pathname } = useLocation()
  const userRoute = matchPath("/detail/:id", pathname)
  const userIdUrl = userRoute ? userRoute.params.id : null
  const userDetail = listUsers.find(user => user.id === parseInt(userIdUrl))

  return ( 
    <>      
      <Routes>
        <Route path="/" element={<ListUser listUsers={listUsers} />} />
        <Route path="/detail/:id" element={<DetailUser userDetail={userDetail} />} />
        <Route path="*" element={<h2>Pagina no encontrada</h2>} />
      </Routes>  
    </>

  )
}

export default App
