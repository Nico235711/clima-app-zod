import { countries } from "../../data/countries"
import styles from './Form.module.css'

const Form = () => {

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Ciudad"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País:</label>
        <select name="country" id="country">
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