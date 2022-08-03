import {Component} from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';


class CharList extends Component {

     state = {
        charList: [],
        loading: true,
        error: false,
        newItemloading: false,
        offset:1541,
        charEnded: false,
    }
    marvelService = new MarvelService();

   componentDidMount() {
       this.onRequest();
    }

    onRequest = (offset)=>{
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }
    onCharListLoading = ()=>{
        this.setState({newItemloading: true});
    }

     onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9 ){
            ended = true;
        }

        this.setState(({offset,charList})=>({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemloading: false,
            offset: offset+9,
            charEnded:ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    renderItems(arr){
        const items = arr.map(item => {
            const objectFit = item.thumbnail===`http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`? {objectFit:'contain'}:{objectFit:'cover'} ;

            return(
                 <li key={item.id}
                    className="char__item"
                   onClick={()=> this.props.onCharSelected(item.id)} >
                        <img src={item.thumbnail} alt={item.name} style={objectFit}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        })
        return (
             <ul className="char__grid">
                {items}
            </ul>
        )
    }
    
    render() {

        const {charList, loading, error,newItemloading, offset,charEnded} = this.state;
        const items = this.renderItems(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null

        return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {content}
            <button 
            style={{"display": charEnded ? 'none' : 'block'}}
            className="button button__main button__long"
            disabled={newItemloading}
            onClick={()=> this.onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}



export default CharList;