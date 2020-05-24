import React, { Component } from 'react';
import moment from 'moment';
import '../../src/tailwind.generated.css';
import Data from './test.json';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      currentWeek: [],
      currentWeekIndex: '',
    };
  }

  firstWeek = () => {
    let firstDay = this.state.dateObject.startOf('week');
    let days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(moment(firstDay).add(i, 'days').format('D'));
    }
    return days;
  };

  componentDidMount() {
    let daysinweek = this.firstWeek();
    let currentWeekIndex = this.state.dateObject.week();
    this.setState({
      currentWeek: daysinweek,
      currentWeekIndex: currentWeekIndex,
    });
  }

  prevWeek = () => {
    let weekIndex = this.state.currentWeekIndex;
    let nextWeekDay = this.state.dateObject.day('Sunday').week(weekIndex - 1);
    let days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(moment(nextWeekDay).add(i, 'days').format('D'));
    }
    this.setState({
      currentWeek: days,
      currentWeekIndex: weekIndex - 1,
    });
  };

  nextWeek = () => {
    let weekIndex = this.state.currentWeekIndex;
    let nextWeekDay = this.state.dateObject.day('Sunday').week(weekIndex + 1);
    let days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(moment(nextWeekDay).add(i, 'days').format('D'));
    }
    this.setState({
      currentWeek: days,
      currentWeekIndex: weekIndex + 1,
    });
  };

  render() {
    let timeArr = [
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
      '12 AM',
      '1 AM',
      '2 AM',
      '3 AM',
      '4 AM',
      '5 AM',
      '6 AM',
      '7 AM',
    ];
    let weekdayshort = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let blank = [];
    let rows = [];
    let cells = [];
    let index = Object.entries(Data).map(([key, value]) => {
      return key;
    });
    index = index.map((item) => {
      return this.state.currentWeek.findIndex((i) => i == item);
    });
    console.log(index);
    for (let i = 0; i < timeArr.length * 8; i++) {
      blank.push(
        <div
          className='flex-1 bg-gray-200 h-12 mr-2 border rounded grid text-enter'
          key={Math.random()}
        >
          {''}
        </div>
      );
    }
    blank.forEach((item, i) => {
      if (i % 8 !== 0) {
        cells.push(
          <div
            className={
              weekdayshort[(i % 8) - 1] == 'Sunday' ||
              weekdayshort[(i % 8) - 1] == 'Saturday' ||
              (timeArr[parseInt(i / 8)] != '9 AM' &&
                timeArr[parseInt(i / 8)] != '10 AM' &&
                timeArr[parseInt(i / 8)] != '11 AM' &&
                timeArr[parseInt(i / 8)] != '12 PM' &&
                timeArr[parseInt(i / 8)] != '2 PM' &&
                timeArr[parseInt(i / 8)] != '3 PM' &&
                timeArr[parseInt(i / 8)] != '4 PM' &&
                timeArr[parseInt(i / 8)] != '5 PM')
                ? 'flex-1 bg-gray-200 h-16 mr-2 border rounded grid text-enter'
                : 'flex-1 bg-purple-100 h-16 mr-2 border border-purple-500 rounded grid text-enter'
            }
            key={Math.random()}
          >
            <p
              className={
                weekdayshort[(i % 8) - 1] == 'Sunday' ||
                weekdayshort[(i % 8) - 1] == 'Saturday' ||
                (timeArr[parseInt(i / 8)] != '9 AM' &&
                  timeArr[parseInt(i / 8)] != '10 AM' &&
                  timeArr[parseInt(i / 8)] != '11 AM' &&
                  timeArr[parseInt(i / 8)] != '12 PM' &&
                  timeArr[parseInt(i / 8)] != '2 PM' &&
                  timeArr[parseInt(i / 8)] != '3 PM' &&
                  timeArr[parseInt(i / 8)] != '4 PM' &&
                  timeArr[parseInt(i / 8)] != '5 PM')
                  ? 'text-xs text-center text-gray-400 font-bold'
                  : 'text-xs text-center text-purple-300 font-bold'
              }
            >
              {timeArr[parseInt(i / 8)].split(' ')[0] +
                timeArr[parseInt(i / 8)].split(' ')[1].toLocaleLowerCase()}
              <br></br>
              {weekdayshort[(i % 8) - 1] == 'Sunday' ||
              weekdayshort[(i % 8) - 1] == 'Saturday' ||
              (timeArr[parseInt(i / 8)] != '9 AM' &&
                timeArr[parseInt(i / 8)] != '10 AM' &&
                timeArr[parseInt(i / 8)] != '11 AM' &&
                timeArr[parseInt(i / 8)] != '12 PM' &&
                timeArr[parseInt(i / 8)] != '2 PM' &&
                timeArr[parseInt(i / 8)] != '3 PM' &&
                timeArr[parseInt(i / 8)] != '4 PM' &&
                timeArr[parseInt(i / 8)] != '5 PM')
                ? 'Blocked'
                : Object.entries(Data).map(([key, value]) => {
                    return this.state.currentWeek.map((item, index) => {
                      if (key == item) {
                        console.log(key, item, i);
                        if (i == index + 1 + 8) {
                          return value.map((itm) => {
                            if (itm.time == timeArr[parseInt(i / 8)])
                              return itm.title;
                          });
                        }
                      }
                    });
                  })}
            </p>
          </div>
        ); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = [];
        // empty container
        cells.push(
          <div className='flex-1 font-bold' key={Math.random()}>
            <p className='text-center mt-3'>{timeArr[i / 8]}</p>
          </div>
        ); // in current loop we still push current row to new container
      }
      if (i === blank.length - 1) {
        // when end loop we add remain date
        rows.push(cells);
      }
    });
    let daysinmonth = rows.map((d, i) => {
      return (
        <div className='flex mb-1' key={Math.random()}>
          {d}
        </div>
      );
    });
    let weekdayshortname = weekdayshort.map((day) => {
      return (
        <div className='flex-1 text-xs font-bold' key={Math.random()}>
          {day}
        </div>
      );
    });

    return (
      <div className='content-center'>
        {/* <div className='flex mb-4'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-10'
            onClick={this.prevWeek}
          >
            Prev
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={this.nextWeek}
          >
            Next
          </button>
        </div> */}
        <div className='bg-gray-100'>
          <div className='flex'>
            <div className='flex-1 h-12'></div>
            {weekdayshortname}
          </div>
          <div className='flex -mt-8'>
            <div className='flex-1 h-12'></div>
            {this.state.currentWeek.map((item, i) => {
              return (
                <div className='flex-1 h-12 font-bold' key={i}>
                  {item}
                </div>
              );
            })}
          </div>

          {daysinmonth}
        </div>
      </div>
    );
  }
}
