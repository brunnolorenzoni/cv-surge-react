import React from 'react';
import ItemRaiting from './ItemRaiting'
import Card from '@material-ui/core/Card';

import './index.scss';

function CardRaiting(props) {
    const { data } = props;
    console.log(data)
    return (
        <Card className="card" variant="outlined">
            <h3 className="card__title">{data.title}</h3>
            <ul className="card__list">
                {data.items.map((item, index) => <ItemRaiting data={item} key={`item-${index}-${new Date().getTime() + Math.random().toString(36).substr(2)}`}/>)}
            </ul>
        </Card>
    );
}

export default CardRaiting;
