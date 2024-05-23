
function FilterByName ({setNameFilter}) {
    const handleInputChange = (event) => {
        setNameFilter(event.target.value);
    };

    return (
        <input className="input" type="text" placeholder="Filtrar por nombre" onChange={handleInputChange} />
    );
}

export default FilterByName