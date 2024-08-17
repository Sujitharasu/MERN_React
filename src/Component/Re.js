import React from 'react';
import './Re.css';


function Re(props) {
  return (
    <div className="pc">
      <div className="status">
        <button className={props.online ? "status online" : "status offline"}>{props.online ? "ONLINE" :"OFFLINE"}</button>
      </div>
      <div className="pi">
        <img src='me.jpg'></img>
      </div>
      <h1>Sujitha </h1>
      <h2>Rasu</h2>
      <p className="title">Full Stack Developer</p>
      <div className="actions">
        <button className="one">Message</button>
        <button className="two">Following</button>
      </div>
      <h3>SKILLS</h3>
      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Java</span>
        <span>Database</span>
      </div>
    </div>
  );
}



export default Re;
