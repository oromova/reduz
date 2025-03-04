import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCars, closeModal, openModal, removeCars } from './Action';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

function Home() {
  const open = useSelector(state => state.open);
  const dispatch = useDispatch();
  const card = useSelector(state => state.card);

  const cars = [
    { id: 1, name: "Ford", model: "Mustang", year: 2020 },
    { id: 2, name: "Toyota", model: "Camry", year: 2015 },
    { id: 3, name: "Honda", model: "Civic", year: 2018 }
  ];

  const isCars = (carId) => {
    return card?.some(car => car?.id === carId);
  };
  return (
    <div>
      <h1>Modal</h1>
      <button onClick={() => dispatch(openModal())}>open modal</button>
      {!open ? "" : <div>Modal bor <span onClick={() => dispatch(closeModal())}>x</span></div>
      }
      <div>
        <h2 style={{}}>CARS</h2>
        <div style={{ display: 'flex', gap: '25px', }}>
          {
            cars.map(car => (
              <div key={car.id} style={{ position: 'relative', width: '200px', height: '100px', border: '1px solid green', textAlign: 'center', paddingTop: '10px', paddingBottom: '60px' }}>
                <h3>{car.name}</h3>
                <p>{car.model} </p>
                ({car.year})
                <div style={{ position: 'absolute', bottom: '20px', right: '30px', cursor: "pointer", }} onClick={() => isCars(car?.id) ? dispatch(removeCars(car?.id)) : dispatch(addCars(car))}>
                  {isCars(car?.id) ? <FaHeart /> : <CiHeart style={{ fontSize: '20px' }} />}
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div >
  );
}

export default Home;