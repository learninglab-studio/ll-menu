import styles from './card-with-texture.module.css'

export default function CardWithTexture(props){
    return(
        <div className={styles.cardWithTexture}>{props.text}</div>
    )
}