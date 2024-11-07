import React from 'react';
import './References.css';

const References = () => (
  <div className="references-container">
    <h2 className="references-heading">References</h2>
    
    <p>Here are some useful resources to learn more about the Node.js File System:</p>

    <div className="section">
      <h3>URLs</h3>
      <ul>
        <li>
          <a href="https://www.geeksforgeeks.org/node-js-file-system/" target="_blank" rel="noopener noreferrer">
            GeeksforGeeks: Node.js fs Module
          </a>
        </li>
        <li>
          <a href="https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm" target="_blank" rel="noopener noreferrer">
            TutorialsPoint: Node.js File System
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/api/fs.html" target="_blank" rel="noopener noreferrer">
            Official Node.js Documentation: File System
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/nodejs/nodejs_filesystem.asp" target="_blank" rel="noopener noreferrer">
            W3Schools: Node.js File System
          </a>
        </li>
      </ul>
    </div>

    <div className="section">
      <h3>Books</h3>
      <ul>
        <li>
          <strong>Node.js Design Patterns</strong> by Mario Casciaro and Luciano Mammino - This book covers a wide range of Node.js topics, including the file system module, asynchronous programming, and best practices.
        </li>
        <li>
          <strong>Node.js 14 Cookbook</strong> by David Mark Clements and Bethany Griggs - A practical guide for working with Node.js 14, this cookbook includes recipes for file system operations, handling file streams, and manipulating files.
        </li>
        <li>
          <strong>Node.js in Action</strong> by Alex R. Young, Bradley Meck, Mike Cantelon, Marc Harter, TJ Holowaychuk, and Nathan Rajlich - This book covers various aspects of Node.js, including modules like fs for file operations with practical examples.
        </li>
      </ul>
    </div>
  </div>
);

export default References;
