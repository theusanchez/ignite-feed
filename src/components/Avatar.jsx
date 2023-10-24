import styles from './Avatar.module.css'

export function Avatar(props) {
    // console.log(props)
    return (
        <img
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={props.src}
        />
    );
}