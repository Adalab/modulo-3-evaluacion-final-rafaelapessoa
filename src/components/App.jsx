import { useEffect, useState } from "react";
import "../scss/App.scss";
import getDataFromApi from "../services/api";
import ListUser from "./ListUser";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import DetailUser from "./DetailUser";


function App() {
  const [listUsers, setListUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((newArray) => { setListUsers(newArray) })
  }, [])
  
  const { pathname } = useLocation();
  const userRoute = matchPath("/detail/:id", pathname);
  const userIdUrl = userRoute ? userRoute.params.id : null;
  const userDetail = listUsers.find(user => user.id === parseInt(userIdUrl));

  const filterData = listUsers
    .filter((item) => (nameFilter ? item.name.toLowerCase().includes(nameFilter.toLowerCase()) : true))
    .filter((item) => (speciesFilter ? speciesFilter === item.specie : true));

  return (
    <>      
      <Routes>
        <Route path="/" element={
          <section> 
            {filterData.length > 0 ? (
              <ListUser listUsers={filterData} setNameFilter={setNameFilter} setSpeciesFilter={setSpeciesFilter} speciesFilter={speciesFilter} />
            ):(
            <p>
              {`No hay ningún personaje que coincida con la palabra ${nameFilter}`}
            </p>
            )}
          </section>
        } />
        
        <Route path="/detail/:id" element={<DetailUser userDetail={userDetail} />} />
        <Route path="*" element={<h2>El personage que buscas no existe</h2>} />
      </Routes>
      
    </>
  );
}

export default App
