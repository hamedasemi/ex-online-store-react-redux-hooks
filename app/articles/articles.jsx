import { Fragment, useContext, useEffect } from "react"
import context from "../context";
import { Article } from "./article/article";

export const Articles = () => {
    const { state, dispatch } = useContext(context)
    let authorization;
    switch (window.location.hostname) {
        case 'localhost':
            authorization = '6422617c525a4d393f409a23c31110'
            break;
        case 'haniehonlinestore.com':
            authorization = 'khsdvfwjdbvfjksebdfejsebfjsrgh'
            break;
        default:
            authorization = '6422617c525a4d393f409a23c31110'
            break;
    }
    const fetchArticles = async () => {
        const response = await fetch(`https://graphql.datocms.com?query=query MyQuery {
                allArticles(filter: {category: {eq: "${state.category}"}}) {
                    id
                    rate
                    price
                    title
                    time
                    specialOffer
                    sale
                    new
                    description
                    bestseller
                    images {
                        url(imgixParams: {w: "400"})
                    }
                }
            }`, {
            headers: {
                'Authorization': authorization
            }
        });
        const data = await response.json();
        dispatch({ type: 'SET-ARTICLES', payload: data.data.allArticles })
    }
    const fetchAllArticles = async () => {
        const response = await fetch(`https://graphql.datocms.com?query=query MyQuery {
                allArticles() {
                    id
                    rate
                    price
                    title
                    time
                    specialOffer
                    sale
                    new
                    description
                    bestseller
                    images {
                        url(imgixParams: {w: "400"})
                    }
                }
            }`, {
            headers: {
                'Authorization': authorization
            }
        });
        const data = await response.json();
        dispatch({ type: 'SET-ARTICLES', payload: data.data.allArticles })
    }
    useEffect(() => {
        if (state.category) {
            fetchArticles();
        } else {
            fetchAllArticles();
        }
    }, [state.category]);
    return <Fragment>
        {state.articles.map((article) => {
            return <Article key={article.id} article={article}></Article>
        })}
    </Fragment>
}