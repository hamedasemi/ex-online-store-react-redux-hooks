import style from './article.css';
export const Article = (props) => {
    return <div className={style.article}>
        <img src={props.article.images[0].url} alt="" />
        <h3>{props.article.title}</h3>
        <h2>Price:{props.article.price}$</h2>
    </div>
}