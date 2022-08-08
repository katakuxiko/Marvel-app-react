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
        offset:210,
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
        const items = arr.map((item,i) => {
            const objectFit = item.thumbnail===`http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`? {objectFit:'contain'}:{objectFit:'cover'} ;

            return(
                 <li key={item.id}
                    tabIndex={0}
                    ref={this.setRef}
                    className="char__item"
                    onClick={()=> {
                    this.props.onCharSelected(item.id);
                    this.focusOnItem(i);
                    }} 
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}>
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
    itemRefs  =[]

    setRef=(ref)=>{
        this.itemRefs.push(ref)
    }

        focusOnItem = (id) => {
        // Я реализовал вариант чуть сложнее, и с классом и с фокусом
        // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
        // На самом деле, решение с css-классом можно сделать, вынеся персонажа
        // в отдельный компонент. Но кода будет больше, появится новое состояние
        // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

        // По возможности, не злоупотребляйте рефами, только в крайних случаях
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
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