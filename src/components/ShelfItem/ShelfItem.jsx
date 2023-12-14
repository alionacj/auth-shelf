import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function ShelfItem({item}) {
const dispatch = useDispatch();


  const deleteItem = () => {
    dispatch({
        type: 'DELETE_ITEM',
        payload: item.id
    })
  }

  return (
    <div className="shelfItem" >
        <img src={item.image_url} />
        <p>{item.description}</p>
        <p>By: {item.username}</p>
        <button onClick={deleteItem}>DELETE</button>
        <br /><br />
    </div>
  );
}

export default ShelfItem;
