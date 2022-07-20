import React from "react";
import { useContent } from '../hooks';
import { BrowseContainer } from '../containers/browse';
import selectionFilter from '../utils/selection-filter';

export default function Browse(){

    // we imported the series and movies from firebase
    const { series } = useContent('series');
    const { films } = useContent('films');
    //console.log(films);

    //we need slides
    const slides = selectionFilter({ series, films });

    //pass it to browser container
    return <BrowseContainer slides={slides} />;
};

