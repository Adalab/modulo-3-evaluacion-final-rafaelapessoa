
function FilterBySpecies({ setSpeciesFilter, speciesFilter }) {
    
    const handleChange = (ev) => {
        console.log('Selected value:', ev.target.value);
        setSpeciesFilter(ev.target.value)
    }
    
    return (
        <div className="select">
            <select name="" id="" onChange={handleChange} value={speciesFilter}>
                <option value="">Select specie</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>
        </div>
    )
}

export default FilterBySpecies