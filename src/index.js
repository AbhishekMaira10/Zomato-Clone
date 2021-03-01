import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Salutation ({fname,lname}) {
//   return <h3>Hello {fname} {lname}</h3>;
// }

function SaluteAll() {

  let [counter, setCounter] = useState(0);

  let update = () => {
    setCounter(counter + 1);
  }

//   let info = [
//     ['Abhishek', 'Maira'],
//     ['Anuj', 'Garg'],
//     ['Katrina', 'Kaif'],
//   ]
  

// let infoSecond = [];

// let shift = function() {
//   if(info.length > 0)
//   {
//     let item = info.pop();
//     infoSecond.push(item);
//   }
// }

  return (
    <div>
      <button onClick={update}>Click me</button>
      <h1>{counter}</h1>
      {/* <h1>List One</h1>
      <div>
        {info.map((item) => {
          return <Salutation fname={item[0]} lname={item[1]} />
        })}
      </div>
      <h1>List Two</h1>
      <div>
        {infoSecond.map((item) => {
          return <Salutation fname={item[0]} lname={item[1]} />
        })}
      </div> */}
    </div>
  )
}

ReactDOM.render(
  <SaluteAll />,
  document.getElementById('root')
);
