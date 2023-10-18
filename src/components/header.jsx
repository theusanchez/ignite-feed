import styles from './header.module.css'
import igniteSymbol from '../assets/igniteSimbol.png'
export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <section className={styles.headerContentContainer}>
                    <img src={igniteSymbol} alt="" />
                    <h1>Ignite Feed</h1>
                </section>
            </header>
        </div>
    )
}