import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'


export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    const [comments, setComments] = useState([
        'Post muito banana, hein!?',
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(e) {
        e.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(e) {
        // console.log(e.target.value)
        setNewCommentText(e.target.value)
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href="#">{item.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                    name='newComment'
                    value={newCommentText}
                />

                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}

            </div>
        </article>
    )
}