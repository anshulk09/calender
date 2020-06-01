import React, { useState } from 'react';
import Data from './test.json';
import '../../src/tailwind.generated.css';
import Modal from './Modal';

export default function TimeLine(props) {
  const [isVisible, setVisible] = useState(false);
  const openModal = (e) => {
    e.stopPropagation();
    setVisible(true);
  };
  const hideModal = (e) => {
    setVisible(false);
  };
  const hide = (e) => {
    e.stopPropagation();
    setVisible(false);
  };
  if (
    props.weekday == 'Sunday' ||
    props.weekday == 'Saturday' ||
    (props.time != '9 AM' &&
      props.time != '10 AM' &&
      props.time != '11 AM' &&
      props.time != '12 PM' &&
      props.time != '2 PM' &&
      props.time != '3 PM' &&
      props.time != '4 PM' &&
      props.time != '5 PM')
  ) {
    return (
      <div className='flex-1 bg-gray-200 h-16 mr-2 border rounded grid text-enter'>
        <p className='text-xs text-center text-gray-400 font-bold'>
          {props.time} <br></br>Blocked
        </p>
      </div>
    );
  } else {
    return Object.entries(Data).map(([key, value]) => {
      if (key == props.day) {
        return value.map((item) => {
          if (item.time == props.time) {
            return (
              <div
                key={Math.random()}
                className='flex-1 bg-green-300 h-16 mr-2 border border-green-500 rounded grid text-enter'
                onClick={openModal}
              >
                <p
                  key={Math.random()}
                  className='text-xs text-center text-white font-bold'
                >
                  {props.time} <br></br>
                  {item.title}
                </p>
                <Modal visible={isVisible} onClose={hideModal}>
                  <div className='mr-40'>
                    <i className='fa fa-times' onClick={hide}></i>
                  </div>
                  <div className='text-lg font-bold mb-3'>{item.title}</div>
                  <p className='text-xs font-bold mb-3'>
                    {props.weekday},{' ' + props.month + ' ' + props.day + ' '}
                    at
                    {' ' + props.time}
                  </p>
                  <div className='text-xs text-green-300 font-bold mb-4'>
                    Repeats every day
                  </div>
                  <div>
                    <button className='bg-yellow-500 hover:bg-yellow-700 text-white border border-white font-bold py-1 px-3 rounded mr-5'>
                      Reschedule
                    </button>
                    <button className='bg-red-500 hover:bg-red-700 text-white border border-white font-bold py-1 px-4 rounded mr-5'>
                      <i className='fa fa-times-cicle'></i>Cancel
                    </button>
                  </div>
                </Modal>
              </div>
            );
          } else {
            return (
              <div
                key={Math.random()}
                className='flex-1 bg-purple-100 h-16 mr-2 border border-purple-500 rounded grid text-enter'
              >
                <p
                  key={Math.random()}
                  className='text-xs text-center text-purple-300 font-bold'
                >
                  {props.time} <br></br>
                  Open
                </p>
              </div>
            );
          }
        });
      }
    });
  }
}
