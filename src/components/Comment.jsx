import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from './Comment.module.css'
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from "react";


export function Comment({ author, publishedAt, content, onDeleteComment }) {

    const [likeCount, setLikes] = useState(0)

    function handleLikeCounter() {
        setLikes((state) => {
            return state + 1;
        })
    }

    function handleDeleteComment() {
        onDeleteComment(content[0].content)
    }
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
    return (
        <div className={styles.commentWrapper}>
            {/* {console.log(publishedDateFormatted)} */}
            <Avatar hasBorder={false} src={author.avatarUrl} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            <time
                                className="time"
                                title={publishedDateFormatted.toString()}
                                dateTime={publishedAt.toISOString()}>
                                {publishedDateRelativeToNow}
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} className={styles.commentIcon} title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content[0].content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeCounter}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}