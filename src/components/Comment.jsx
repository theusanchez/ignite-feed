import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from './Comment.module.css'
import { Avatar } from "./Avatar";

export function Comment(props) {
    return (
        <div className={styles.commentWrapper}>
            <Avatar hasBorder={false} src={props.src} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Sanchez</strong>
                            <time className="time" title='10 de Outubro as 22:16' dateTime='2023-10-10 22:17:52'>Há cerca de 1h atrás</time>
                        </div>
                        <button className={styles.commentIcon} title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {props.content}
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}