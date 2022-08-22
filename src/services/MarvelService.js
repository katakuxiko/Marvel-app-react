import { useHttp } from '../components/hooks/http.hook';

const useMarvelService = ()=>{
	const {loading,request,error,clearError} = useHttp();
	
	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=ff5ce3ecbcc8c665529b8eaa817b386d'
	const _baseOffset= 210;
	
	const getAllComics = async(offset=_baseOffset)=>{
		const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformComics);
	}
	const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

	const getAllCharacters =async (offset = _baseOffset)=>{
		const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	}
	const getCharacter = async(id)=>{
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	}
	const getCharacterByName = async(name)=>{
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
	}
	const _transformComics = (comics)=>{
		return{
			id: comics.id,
			title: comics.title,
			description: comics.description? comics.description:'There is no description',
			pageCount: comics.pageCount?`${comics.pageCount} p.`:'No information about of number of pages',
			language: comics.textObjects.language || 'en-us',
			thumbnail: comics.thumbnail.path +'.'+ comics.thumbnail.extension,
			price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available'
		}
	}

	const _transformCharacter = (char)=>{
		return {
			  	name: char.name,
                description: char.description,
                thumbnail: char.thumbnail.path +'.'+ char.thumbnail.extension,
                homepage: char.urls[0].url,
                wiki: char.urls[1].url,
				id: char.id,
				comics: char.comics.items
		}
	}

	return {loading, error, getAllCharacters, getCharacter,clearError,getAllComics,getComics,getCharacterByName}
}

export default useMarvelService