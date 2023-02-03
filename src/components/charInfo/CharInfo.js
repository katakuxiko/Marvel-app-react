import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import setContent from '../../utils/setContent';

import useMarvelService from '../../services/MarvelService';
import './charInfo.scss';

const CharInfo =(props)=>{

    const [char, setChar] = useState();
   
    const {getCharacter,clearError,process,setProcess} =  useMarvelService();

    useEffect(()=>{
        updateChar();
    },[])

    const updateChar=()=>{
        const {charId} = props;
        if(!charId) return;

        clearError();
        getCharacter(charId)
        .then(onCharLoad).then(()=>setProcess('confirmed'))
        
    }

    const onCharLoad = (char)=>{
            setChar(char)

    }
   

    
    useEffect(()=>{
        updateChar();
    },[props.charId])

    

    // const skeleton = char || loading || error ? null : <Skeleton/> 
    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error || !char) ? <View char={char}/> : null;
    return (
        <div className="char__info">
           {/* {skeleton}
           {errorMessage}
           {spinner}
           {content} */}
           {
               setContent(process, View, char)
           }
        </div>
    )
    }
    


const View = ({data})=>{
    const {name, description, thumbnail, homepage, wiki, comics} = data;
    const objectFit = thumbnail===`http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`? {objectFit:'contain'}:{objectFit:'cover'} ;

    return(
        <>
         <div className="char__basics">
                <img src={thumbnail} alt={name} style={objectFit}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description} 
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length>0?null:'Comics not found'}
                {
                    comics.map((item,i)=>{
                        if(i<10){
                        return(
                            <li className="char__comics-item" key={i}>
                            {item.name}
                            </li>
                        )} else {
                            return null
                        }
                    
                        })
                }
                
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;