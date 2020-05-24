import React from 'react';
import '../../src/tailwind.generated.css';

export default function TimeLine() {
  let timeArr = [
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
  ];
  console.log(timeArr.length * 7);
  let blank = [];
  let rows = [];
  let cells = [];
  for (let i = 0; i < timeArr.length * 8; i++) {
    blank.push(
      <td className='border px-4 py-2' key={Math.random()}>
        {'d'}
      </td>
    );
  }
  blank.forEach((item, i) => {
    if (i % 8 !== 0) {
      cells.push(item); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = [];
      // empty container
      console.log(i);
      cells.push(<td key={Math.random()}>{timeArr[i / 8]}</td>); // in current loop we still push current row to new container
    }
    if (i === blank.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });
  let daysinmonth = rows.map((d, i) => {
    return (
      <tr className='bg-gray-100' key={Math.random()}>
        {d}
      </tr>
    );
  });
  return (
    <div>
      <table className='table-fixed'>
        <tbody>{daysinmonth}</tbody>
      </table>
    </div>
  );
}
