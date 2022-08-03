

class MarvelService{
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=ff5ce3ecbcc8c665529b8eaa817b386d'
	_baseOffset= 210;
	getResources = async (url)=>{
		let res = await fetch(url);

		if(!res.ok){
			throw new Error(`Could not fetch ${url}`)
		}
		return await res.json();
	}

	getAllCharacters =async (offset = this._baseOffset)=>{
		const res = await this.getResources(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
		return res.data.results.map(this._transformCharacter);
	}
	getCharacter = async(id)=>{
		const res = await this.getResources(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
	}

	_transformCharacter = (char)=>{
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
}

export default MarvelService