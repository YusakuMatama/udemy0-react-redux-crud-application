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
    const profiles = [
        {
            name: "Taro", age: 10
        },
        {
            name: "Hanako", age: 5
        },
        {
            name: "Noname"
        }
    ]
    return (
        <div>
            {
                profiles.map((profile, index) =>{
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
        </div>

        )
}

const User = (props) => {
    return <div>Hi, I am {props.name}!, and {props.age} years old</div>
}

User.defaultProps ={
    age: 1
}
export default App;
