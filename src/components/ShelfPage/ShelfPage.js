import React from 'react';


function ShelfPage() {

  let dummyData = [{
    id: 1,
    description: 'Boy, this is a nice boat.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Motorboat_at_Kankaria_lake.JPG/1200px-Motorboat_at_Kankaria_lake.JPG',
    username: 'mark'
  }]


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {dummyData.map((item) => {
        return(
        <div key={item.id}>
          <img src={item.image_url} />
          <p>{item.description}</p>
          <p>By: {item.username}</p>
        </div>)
      })}
    </div>
  );
}

export default ShelfPage;
