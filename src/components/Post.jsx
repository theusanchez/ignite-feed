import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'



export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    const randomUsers = [
        {
            userName: 'Fernando Mason',
            userPicture: 'https://github.com/octocat.png'
        },
        {
            userName: 'Amanda Korpela',
            userPicture: 'https://github.com/torvalds.png'
        },
        {
            userName: 'Soukaina Lankreijer',
            userPicture: 'https://github.com/defunkt.png'
        },
        {
            userName: 'Deepika Kumari',
            userPicture: 'https://github.com/mojombo.png'
        },
        {
            userName: 'Mônica Nascimento',
            userPicture: 'https://github.com/pjhyett.png'
        },
        {
            userName: 'Eline Robert',
            userPicture: 'https://github.com/wycats.png'
        },
        {
            userName: 'Erna Hieber',
            userPicture: 'https://github.com/schacon.png'
        },
        {
            userName: 'Rishi Acharya',
            userPicture: 'https://github.com/hubot.png'
        },
        {
            userName: 'Addison Margaret',
            userPicture: 'https://github.com/markdotto.png'
        },
        {
            userName: 'Wyatt Oliver',
            userPicture: 'https://github.com/banach-space.png'
        }
    ]
    
    const [comments, setComments] = useState([
        {
            id: 1,
            author: {
                avatarUrl: 'https://github.com/theusanchez.png',
                name: 'Matheus Sanchez',
            },
            content: [
                { type: 'paragraph', content: 'Aeeee! Boa. 👍👍' },
            ],
            publishedAt: new Date('2023-10-10 16:20:00')
        },
        {
            id: 2,
            author: {
                avatarUrl: 'https://github.com/figueiredo-lucas.png',
                name: 'Lucas Figueiredo',
            },
            content: [
                { type: 'paragraph', content: 'Muito legal seu post, parabéns. 👌👌' },
            ],
            publishedAt: new Date('2023-10-07 12:10:00')
        },
        {
            id: 3,
            author: {
                avatarUrl: 'https://github.com/savioserra.png',
                name: 'Sávio Serra',
            },
            content: [
                { type: 'paragraph', content: '💕🙌🙌❤️❤️' },
            ],
            publishedAt: new Date('2023-10-03 16:26:00')
        }
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment.content[0].content !== commentToDelete
        })

        setComments(commentWithoutDeletedOne);
    }

    function handleCreateNewComment(e) {
        const userNumber =  Math.floor(Math.random() * 10)
        console.log(userNumber)
        e.preventDefault()
        const comment = {
            id: Math.floor(Math.random() * 10),
            author: {
                avatarUrl: randomUsers[userNumber].userPicture,
                name: randomUsers[userNumber].userName,
            },
            content: [
                { type: 'paragraph', content: newCommentText },
            ],
            publishedAt: new Date()
        }
        setComments([...comments, comment]);
        setNewCommentText('');

    }

    function handleNewCommentInvalid(e) {
        e.target.setCustomValidity('Esse campo é obrigatório!');

    }

    function handleNewCommentChange(e) {
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
        // console.log(publishedDateFormatted)
    }

    const isNewCommentEmpty = newCommentText.length === 0;
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
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    // console.log(commentsToBeMap)
                    // console.log(comment.author.avatarUrl)
                    return (
                        <Comment
                            key={comment.id}
                            author={comment.author}
                            content={comment.content}
                            publishedAt={comment.publishedAt}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}

            </div>

        </article>
    )
}