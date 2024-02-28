// import s from './style.module.css';

import { StarFill, Star as StarEmpty, StarHalf } from 'react-bootstrap-icons';
export function FiveStarsRating({ rating }) {
  //Declare an empty stars table (jsx)
  const starList = [];

  //Store in a variable all the full stars
  const starFillCount = Math.floor(rating);
  //Store on a variable if there is or is not a half star
  const hasStarHalf = rating - starFillCount >= 0.5;
  //Store in a variable the star count
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
  //Push the full stars in the star table
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={'star-fill' + i} />);
  }
  //Push the half stars in the table (if there are)
  if (hasStarHalf) {
    starList.push(<StarHalf key={'star-half'} />);
  }
  //Push the empty stars in the table
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={'star-empty' + i} />);
  }

  return <div>{starList}</div>;
}
