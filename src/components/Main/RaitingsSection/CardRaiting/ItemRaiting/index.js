import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ItemRaiting(props) {
    const { data } = props;
    const points = [];

    for (let i = 0; i < data.raiting; i++) {
        points.push(
            <FiberManualRecordIcon key={`score-${i}-${Math.random(data.title).toString(36).substr(2)}`} />
        );
    }

    return (
        <li className="card__list__item">
            <span>{data.title}</span>
            <div className="card__list__item__scoreContainer">
                <span>{points}</span>
                <span>{data.raiting}</span>
            </div>
        </li>
    );
}

export default ItemRaiting;
