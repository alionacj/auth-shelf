import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';
import ShelfForm from '../ShelfForm/ShelfForm';


function ShelfPage() {

  let dummyData = [{
    id: 1,
    description: 'Boy, this is a nice boat.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Motorboat_at_Kankaria_lake.JPG/1200px-Motorboat_at_Kankaria_lake.JPG',
    username: 'mark'
  },
  {
    id: 2,
    description: 'Boy, this is a nice boat again.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Motorboat_at_Kankaria_lake.JPG/1200px-Motorboat_at_Kankaria_lake.JPG',
    username: 'James'
  }]

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS'})
  }, [])

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {dummyData.map((item) => {
          return <ShelfItem item={item} key={item.id}/>
      })}

      <ShelfForm />
    </div>
  );
}

export default ShelfPage;
