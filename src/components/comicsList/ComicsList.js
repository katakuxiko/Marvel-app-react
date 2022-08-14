import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import './comicsList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


const ComicsList = () => {
    const [comicsList,setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(true);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading,error,getAllComics} =  useMarvelService();

    useEffect(() => {
        onRequest(offset,true)
    },[])

    const onRequest=(offset, initial) => {
        initial ? setNewItemLoading(false):setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
    }
    const onComicsLoaded=(newComics) => {
        let ended = false;
        if(newComics.length < 8 ){
            ended = true;
        }
        setComicsList(comicsList =>[...comicsList,...newComics])
        setNewItemLoading(false);
        setOffset(offset=> offset+8);
        setComicsEnded(charEnded=> ended);

    }

    function renderItems(arr){
        const items= arr.map((item,i)=>{
            const objectFit = item.thumbnail===`http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`? {objectFit:'contain'}:{objectFit:'cover'} ;
            return(
                 <li key={i} className="comics__item">
                    <Link to={`/comics/${item.id}`} href="#">
                        <img style={objectFit} src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )

        })
        return(
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    


    const items = renderItems(comicsList);
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading&&!newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button
            disabled={newItemLoading} 
            onClick={()=> onRequest(offset)}
            className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;