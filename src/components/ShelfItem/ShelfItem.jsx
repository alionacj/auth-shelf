import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function ShelfItem({item}) {

  const dispatch = useDispatch();
  
  const user = useSelector(store => store.user)

  const deleteItem = () => {
    dispatch({
        type: 'DELETE_ITEM',
        payload: item.id
    })
  }

  console.log(user)

  return (
    <div className="shelfItem" >
        <img src={item.image_url} />
        <p>{item.description}</p>
        <p>By: {item.username}</p>
        { item.username === user.username && 
        <button onClick={deleteItem}>DELETE</button>
        }
        <br /><br />
    </div>
  );
}

export default ShelfItem;
