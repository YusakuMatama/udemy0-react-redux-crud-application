import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   // const greeting = "Hi, Tom!";
//   // const dom = <h1 className="fooa">{greeting}</h1>;
//   return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked")}}/>
//       </React.Fragment>
//   );
// }

const App = () => {
    return (
        <div>
            {Cat()}
            {Cat()}
        </div>

        )
}

const Cat = () => {
    return <div>Meossssss</div>
}

export default App;
