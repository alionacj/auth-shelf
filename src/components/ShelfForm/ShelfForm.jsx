import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function ShelfForm() {


  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState('');

  const dispatch = useDispatch();

  const submitItem = () => {
    dispatch({ type: 'POST_ITEM', payload: { description, image_url}})
    setDescription('')
    setImage_url('')
  }

  return (
    <div className="shelf_form">

      Description:
          <input
            type="text"
            name="description"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />  
      Image URL:
          <input
            type="text"
            name="image_url"
            required
            value={image_url}
            onChange={(event) => setImage_url(event.target.value)}
          />  
      <button onClick={submitItem}>SUBMIT</button>
    </div>
  );
}

export default ShelfForm;
