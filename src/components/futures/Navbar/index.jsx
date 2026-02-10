import SearchForm from "../SearchForm";
import TempChanger from "../TempChanger";
import styles from "./index.module.scss";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.nav__content}>
        <SearchForm />
        <TempChanger />
      </div>
    </nav>
  )
}

export default Navbar
