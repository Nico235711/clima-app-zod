import { countries } from "../../data/countries"

const Form = () => {

  return (
    <form>
      <div>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          name="city"
          id="city" 
          placeholder="Ciudad"
        />

        <label htmlFor="country">País:</label>
        <select name="country" id="country">
          <option value="">-- Selecciona un país --</option>
          {countries.map(country => (
            <option value={country.code} key={country.code}>{country.name}</option>
          ))}
        </select>
      </div>

      <input type="submit" value="Consultar Clima" />
    </form>
  )
}

export default Form