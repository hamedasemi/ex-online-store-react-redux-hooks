import style from './article.css';
export const Article = (props) => {
    return <div className="articlediv">
        <img src={props.article.images[0].url} alt="" />
        <h3>{props.article.title}</h3>
        <h4>Price:{props.article.price}$</h4>
    </div>
}