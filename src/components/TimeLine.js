import React, { useState } from 'react';
import Data from './test.json';
import '../../src/tailwind.generated.css';
import Modal from './Modal';

export default function TimeLine(props) {
  const [isVisible, setVisible] = useState(false);
  const openModal = (e) => {
    e.stopPropagation();
    console.log(isVisible);
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
                    {props.time} at
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
      } else {
        // return 'unused';
      }
    });
  }

  //   className={
  //     weekdayshort[(i % 8) - 1] == 'Sunday' ||
  //     weekdayshort[(i % 8) - 1] == 'Saturday' ||
  //     (timeArr[parseInt(i / 8)] != '9 AM' &&
  //       timeArr[parseInt(i / 8)] != '10 AM' &&
  //       timeArr[parseInt(i / 8)] != '11 AM' &&
  //       timeArr[parseInt(i / 8)] != '12 PM' &&
  //       timeArr[parseInt(i / 8)] != '2 PM' &&
  //       timeArr[parseInt(i / 8)] != '3 PM' &&
  //       timeArr[parseInt(i / 8)] != '4 PM' &&
  //       timeArr[parseInt(i / 8)] != '5 PM')
  //       ? 'flex-1 bg-gray-200 h-16 mr-2 border rounded grid text-enter'
  //       : 'flex-1 bg-purple-100 h-16 mr-2 border border-purple-500 rounded grid text-enter'
  //   }
  //   key={Math.random()}
  // >
  //   <p
  //     className={
  //       weekdayshort[(i % 8) - 1] == 'Sunday' ||
  //       weekdayshort[(i % 8) - 1] == 'Saturday' ||
  //       (timeArr[parseInt(i / 8)] != '9 AM' &&
  //         timeArr[parseInt(i / 8)] != '10 AM' &&
  //         timeArr[parseInt(i / 8)] != '11 AM' &&
  //         timeArr[parseInt(i / 8)] != '12 PM' &&
  //         timeArr[parseInt(i / 8)] != '2 PM' &&
  //         timeArr[parseInt(i / 8)] != '3 PM' &&
  //         timeArr[parseInt(i / 8)] != '4 PM' &&
  //         timeArr[parseInt(i / 8)] != '5 PM')
  //         ? 'text-xs text-center text-gray-400 font-bold'
  //         : 'text-xs text-center text-purple-300 font-bold'
  //     }
  //   >
  //     {timeArr[parseInt(i / 8)].split(' ')[0] +
  //       timeArr[parseInt(i / 8)].split(' ')[1].toLocaleLowerCase()}
  //     <br></br>
  //     {weekdayshort[(i % 8) - 1] == 'Sunday' ||
  //     weekdayshort[(i % 8) - 1] == 'Saturday' ||
  //     (timeArr[parseInt(i / 8)] != '9 AM' &&
  //       timeArr[parseInt(i / 8)] != '10 AM' &&
  //       timeArr[parseInt(i / 8)] != '11 AM' &&
  //       timeArr[parseInt(i / 8)] != '12 PM' &&
  //       timeArr[parseInt(i / 8)] != '2 PM' &&
  //       timeArr[parseInt(i / 8)] != '3 PM' &&
  //       timeArr[parseInt(i / 8)] != '4 PM' &&
  //       timeArr[parseInt(i / 8)] != '5 PM')
  //       ? 'Blocked'
  //       : Object.entries(Data).map(([key, value]) => {
  //           return this.state.currentWeek.map((item, index) => {
  //             if (key == item) {
  //               console.log(key, item, i);
  //               if (i == index + 1 + 8) {
  //                 return value.map((itm) => {
  //                   if (itm.time == timeArr[parseInt(i / 8)])
  //                     return itm.title;
  //                 });
  //               }
  //             }
  //           });
  //         })}
  //   </p>
}
