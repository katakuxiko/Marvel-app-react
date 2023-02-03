import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import './comicsList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const setContent = (process, Component, newItemLoading) => {
        switch(process){
            case 'waiting':
                return <Spinner/> ;
                break ;
            case 'loading':
                return newItemLoading?<Component />:<Spinner/>;
                break ;
            case 'confirmed':
                return <Component/>;
                break ;
            case 'error':
                return <ErrorMessage/>;
                break;
            default:
                throw new Error(`Unexpected process state`);
        }
 }

const ComicsList = () => {
    const [comicsList,setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(true);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading,error,getAllComics,process,setProcess} =  useMarvelService();

    useEffect(() => {
        onRequest(offset,true)
    },[])

    const onRequest=(offset, initial) => {
        initial ? setNewItemLoading(false):setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
            .then(() => setProcess('confirmed'))
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
                <CSSTransition classNames='comics__item' timeout={1500} key={item.id}>
                 <li key={i} className="comics__item">
                    <Link to={`/comics/${item.id}`} href="#">
                        <img style={objectFit} src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
                </CSSTransition>
            )

        })
        return(
            <ul className="comics__grid">
                <TransitionGroup component={null}>
                {items}
                </TransitionGroup>
            </ul>
        )
    }

    


    

    return (
        <div className="comics__list">
            {
                setContent(process,()=> renderItems(comicsList), newItemLoading)
            }
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