import { ChangeEvent, useState } from "react"
import { countries } from "../../data/countries"
import styles from './Form.module.css'
import { SearchType } from "../../types"

const Form = () => {

  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País:</label>
        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">-- Selecciona un país --</option>
          {countries.map(country => (
            <option value={country.code} key={country.code}>{country.name}</option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        value="Consultar Clima" 
        className={styles.submit}
      />
    </form>
  )
}

export default Form