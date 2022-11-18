import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';
import AppBanner from "../appBanner/AppBanner";

const SinglePage = ({Component, dataType}) => {
        const {Id} = useParams();
        const [data, setData] = useState(null);
        const {getComics, getCharacter, clearError, process, setProcess} = useMarvelService();

        useEffect(() => {
            updateData()
            // eslint-disable-next-line
        }, [Id])

        const updateData = () => {
            clearError();
            switch (dataType) {
                case 'comic':
                    getComics(Id).then(onDataLoaded).then(() => setProcess('confirmed'))
                    break;
                case 'character':
                    getCharacter(Id).then(onDataLoaded).then(() => setProcess('confirmed'))
                    break;
                    default : clearError();
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }

        return (
            <>
                <AppBanner/>
                {setContent(process,Component, data)}
          
            </>
        )
}

export default SinglePage;
