import React from 'react';
import './Aim.css'; 
const Theory = () => {
  return (
    <div className="theory-container">
      <h2 className="theory-heading">Theory of Node.js File System Module</h2>
      <p>
        The Node.js File System (`fs`) module allows interaction with the file system on your machine. It offers 
        both **synchronous** and **asynchronous** methods for working with files, such as reading, writing, and deleting.
      </p>
      <ol className="theory-list">
        <li>
          <strong>Introduction to Node.js File System (fs) module:</strong>
          <span> The 'fs' module allows for interacting with the file system in a way modeled on standard POSIX functions. It provides methods to work with both synchronous and asynchronous file operations, such as reading, writing, appending, deleting, and renaming files. This module is essential for backend operations that involve file handling and storage.</span>
        </li>
        <li>
          <strong>Reading Files:</strong>
          <span> Use the `fs.readFile()` method to asynchronously read a file’s content. It reads the entire file into memory and is suitable for small to medium-sized files.</span>
        </li>
        <li>
          <strong>Writing to Files:</strong>
          <span> Use `fs.writeFile()` to write or overwrite content in a file. If the file does not exist, it will be created.</span>
        </li>
        <li>
          <strong>Appending to Files:</strong>
          <span> With `fs.appendFile()`, you can add new content to an existing file without overwriting it. This is useful for logging and appending historical data.</span>
        </li>
        <li>
          <strong>Deleting Files:</strong>
          <span> Remove unwanted files using `fs.unlink()`. This method is used to delete a file from the filesystem.</span>
        </li>
        <li>
          <strong>Handling Paths:</strong>
          <span> Use the `path` module to create cross-platform file paths, ensuring compatibility across different operating systems.</span>
        </li>
        <li>
          <strong>Handling File Access Permissions:</strong>
          <span> File access permissions can be managed using methods like `fs.chmod()` and `fs.chown()`, providing control over who can access or modify files and directories.</span>
        </li>
      </ol>
      <p>
        These operations are essential for backend developers as they help in managing files efficiently in 
        server-side applications. Understanding the `fs` module will also enable developers to work on features 
        like logging, file-based storage, and configuration management.
      </p>
    </div>
  );
};

export default Theory;
