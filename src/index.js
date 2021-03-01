import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Salutation ({fname,lname}) {
  return <h1>Hello {fname} {lname}</h1>;
}

function SaluteAll() {
  let info = [
    ['Abhishek', 'Maira'],
    ['Anuj', 'Garg'],
    ['Katrina', 'Kaif'],
  ]

  return (
  <div>
    {info.map((item) => {
      return < Salutation fname={item[0]} lname={item[1]}/>;
    })}
  </div>
  );
}

ReactDOM.render(
  <SaluteAll />,
  document.getElementById('root')
);
