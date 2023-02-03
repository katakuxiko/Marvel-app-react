import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';

import AppBanner from "../appBanner/AppBanner";

const SinglePage = ({Component, dataType})=>{
	const {id} = useParams();
	const {getComics, clearError, getCharacter,process, setProcess} = useMarvelService();
	const [data, setData] = useState(null);

	 useEffect(() => {
            updateData()
        }, [id])

	const updateData = () => {
		clearError();

		switch (dataType){
			case 'comic':
				getComics(id).then(onDataLoaded).then(() =>setProcess('confirmed'));
				break;
			case 'character':
				getCharacter(id).then(onDataLoaded).then(() =>setProcess('confirmed'));
				break;
			default:
		}
	}
	const onDataLoaded = (data) => {
            setData(data);
    }


        return (
            <>
                <AppBanner/>
                {setContent(process, Component, data)}
            </>
        )
}

export default SinglePage;