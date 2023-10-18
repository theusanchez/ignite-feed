import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            className={styles.coverImage}
            />
            <div className={styles.profile}>
            <Avatar hasBorder={true} src="http://github.com/theusanchez.png"/>
              <strong>Matheus Sanchez</strong>
              <span>Web Developer</span>  
            </div>
            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}