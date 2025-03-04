import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeCars } from './Action';

function Favourites() {
  const card = useSelector(state => state.card);
  const dispatch = useDispatch();


  return (
    <div>
      <h2 style={{}}>FAVOURITES</h2>
      <div style={{ display: 'flex', gap: '25px', }}>
        {
          card.map(car => (
            <div key={car.id} style={{ position: 'relative', width: '200px', height: '100px', border: '1px solid green', textAlign: 'center', paddingTop: '10px', paddingBottom: '60px' }}>
              <h3>{car.name}</h3>
              <p>{car.model} </p>
              ({car.year})
              <div onClick={() => dispatch(removeCars(car?.id))} style={{ position: 'absolute', bottom: '20px', right: '30px' }}>
                <FaHeart style={{ fontSize: '20px' }} />
              </div>
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default Favourites;