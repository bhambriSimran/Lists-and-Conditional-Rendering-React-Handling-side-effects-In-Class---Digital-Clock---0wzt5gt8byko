// // import React from 'react'
// // import '../styles/App.css';
// // const App = () => {

// //   return (
// //     <div id="main">
// //       <div className="date-time"></div>
// //     </div>
// //   )
// // }


// // export default App;
// import "../styles/App.css";
// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     };
//   }
//   update() {
//     this.setState({ time: new Date().toLocaleTimeString() });
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.update();
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   render() {
//     return (
//       <div className="Clock">
//         <h3 id="time">{this.state.time}</h3>
//       </div>
//     );
//   }
// }

// export default App;

// // const App = () => {
// //   let [time, setTime] = useState(new Date().toLocaleTimeString());
// //   const updateTime = () => {
// //     let currTime = new Date().toLocaleTimeString();
// //     setTime(currTime);
// //   };
// //   useEffect(() => {
// //     let timer = setInterval(()=>{
// //       updateTime();
// //     }, 1000);
// //     return () => {
// //       clearInterval(timer);
// //     };
// //   }, [time]);
// //   return (
// //     <div className="Clock">
// //       <h3 id="time">{time}</h3>
// //     </div>
// //   );
// // };

// // export default App;



















// import "../styles/App.css";
// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     };
//   }
//   update() {
//     this.setState({ time: new Date().toLocaleTimeString() });
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.update();
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   render() {
//     return (
//       <div className="Clock">
//         <h3 id="time">{this.state.time}</h3>
//       </div>
//     );
//   }
// }

// export default App;

// const App = () => {
//   let [time, setTime] = useState(new Date().toLocaleTimeString());
//   const updateTime = () => {
//     let currTime = new Date().toLocaleTimeString();
//     setTime(currTime);
//   };
//   useEffect(() => {
//     let timer = setInterval(()=>{
//       updateTime();
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [time]);
//   return (
//     <div className="Clock">
//       <h3 id="time">{time}</h3>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const dateTime = new Date().toLocaleString();

  const[currentTime,setCurrentTime] = useState(dateTime);

  const update = () => {
    const dateTime = new Date().toLocaleString();
    setCurrentTime(dateTime)
  }

  setInterval(update,1000);
  return (
    <div id="main">
      <div className="date-time">
        <h1>{currentTime}</h1>
      </div>
    </div>
  )
}


export default App;

