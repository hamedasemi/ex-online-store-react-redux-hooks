export const Article = (props) => {
    return <div>
    <h1>{props.article.title}</h1>
    <img src={props.article.images[0].url} alt="" />
</div>
}