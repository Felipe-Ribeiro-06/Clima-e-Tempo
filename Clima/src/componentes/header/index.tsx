import Logo from '../../assets/image.png'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <Link to="/" className={styles.imagem}>
                <img src={Logo} alt="Logo do site" />
            </Link>
        </header>
    )
}
