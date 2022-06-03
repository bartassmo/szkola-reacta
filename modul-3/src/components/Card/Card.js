import React, { useCallback, useState } from "react";
import { Collapse } from "react-collapse";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareFromSquare, faCircleDown } from '@fortawesome/free-regular-svg-icons';

import './Card.css';

function Card({ author, title, date, img, excerpt, content }) {
  const [isOpened, setIsOpened] = useState(false);

  const showMore = useCallback(
    () => setIsOpened(!isOpened),
    [isOpened]
  );

  return (
    <div className="card">
      <div className="card__top">
        <div className="card__author">{ author.substring(0, 1) }</div>
        <div className="card__content">
          <span className="card__title">{ title }</span>
          <span className="card__date">{ date }</span>
        </div>
      </div>
      <div className="card__imgWrapper">
        <img className="card__img" src={ img } alt={ title } />
      </div>
      <div className="card__excerpt">
        <p>{ excerpt }</p>
      </div>
      <div className="card__footer">
        <div className="card__socials">
          <span className="card__icon">
          <FontAwesomeIcon icon={ faHeart } />
          </span>
          <span className="card__icon">
          <FontAwesomeIcon icon={ faShareFromSquare } />
          </span>
        </div>
        <div className="card__expand">
          <span className={ isOpened ? 'card__icon active' : 'card__icon' } onClick={showMore}>
            <FontAwesomeIcon icon={ faCircleDown } />
          </span>
        </div>
      </div>
      <Collapse isOpened={ isOpened }>
        <div className="card__body">{ content }</div>
      </Collapse>
    </div>
  )
}

export default Card;