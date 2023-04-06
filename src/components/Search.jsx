import { useForm } from '../hooks/useForm'


const Search = ({setSearchBreed}) => {
  const [ formValues, handleFormChange ] = useForm({
    search_breed: ''
  });

  const { search_breed } = formValues;

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchBreed(formValues);
  };


  return (
    <div className="searchform">
      <h2>Buscador de razas de gatos</h2>
      <form onSubmit={handleSearchChange} className="searchform__form">
        <input
          autoComplete='off'
          id="search_breed"
          name="search_breed"
          color="secondary"
          onChange={handleFormChange}
          value={search_breed}
          placeholder='Buscar raza...'
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default Search;
