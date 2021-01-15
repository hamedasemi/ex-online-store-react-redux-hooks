import { useEffect, useContext } from "react";
import context from "../context";

export const Categories = () => {
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
    const fetchCategories = async () => {
        const response = await fetch(`https://graphql.datocms.com?query=query MyQuery {
                allCategories() {
                    id
                    title
                }
            }`, {
            headers: {
                'Authorization': authorization
            }
        });
        const data = await response.json();
        dispatch({ type: 'SET-CATEGORIES', payload: data.data.allCategories })
    }
    useEffect(() => {
        fetchCategories();
    }, []);
    const categoryHandler = (event)=>{
        dispatch({ type: 'SET-CATEGORY', payload: event.target.value })
    }
    return <select value={state.category} onChange={categoryHandler}>
        <option value="">All</option>
        {state.categories.map((category) => {
            return <option key={category.id} value={category.id}>{category.title}</option>
        })}
    </select>
}