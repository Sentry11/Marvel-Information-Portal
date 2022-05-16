import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from "../appBanner/AppBanner";

// Хотелось бы вынести функцию по загрузке данных как отдельный аргумент
// Но тогда мы потеряем связь со стэйтами загрузки и ошибки
// А если вынесем их все в App.js - то они будут одни на все страницы

const SinglePage = ({Component, dataType}) => {
        const {Id} = useParams();
        const [data, setData] = useState(null);
        const {loading, error, getComics, getCharacter, clearError} = useMarvelService();

        useEffect(() => {
            updateData()
            // eslint-disable-next-line
        }, [Id])

        const updateData = () => {
            clearError();

            switch (dataType) {
                case 'comic':
                    getComics(Id).then(onDataLoaded);
                    break;
                case 'character':
                    getCharacter(Id).then(onDataLoaded);
                    break;
                    default : clearError();
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !data) ? <Component data={data}/> : null;

        return (
            <>
                <AppBanner/>
                {errorMessage}
                {spinner}
                {content}
            </>
        )
}

export default SinglePage;