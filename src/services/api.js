const getDataFromApi = ()=>{
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((resp) => resp.json())
    .then((data) => {
        const newArray = data.results.map((user) =>{
            return {
                name: user.name,
                id: user.id,
                specie: user.species,
                image: user.image
            };
        });
        return newArray;
    });
};
export default getDataFromApi;