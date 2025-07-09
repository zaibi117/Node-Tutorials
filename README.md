# Node.js Tutorials

This repository contains a collection of practical examples and notes I created while exploring the fundamentals of Node.js. It covers core concepts such as asynchronous programming, working with the file system, building HTTP servers, using event emitters, and more all aimed at helping beginners grasp how Node.js works in real-world scenarios.

## Features

*   **Introduction to Node.js:** Learn the basics of Node.js, including global objects and the module system.
*   **Asynchronous Programming:** Explore asynchronous patterns using callbacks, Promises, and `async/await`.
*   **File System Operations:** Master synchronous and asynchronous file reading and writing.
*   **HTTP Servers:** Create and manage HTTP servers, handle requests, and stream data.
*   **Event Emitters:** Understand and implement custom events using the `EventEmitter` class.
*   **Core Modules:** Learn to use essential Node.js modules like `os`, `path`, `fs`, and `http`.
*   **Streams:** Efficiently handle large files using streams.
*   **Third-Party Libraries:** Integrate and utilize popular libraries like `lodash`.

## Technologies Used

*   **JavaScript:** The primary programming language.
*   **Node.js:** The runtime environment.
*   **Nodemon:** For automatic server restarts during development.
*   **Bootstrap:** (Included as a dependency, but not actively used in the provided code snippets.  Potentially for future UI enhancements.)
*   **Lodash:** A utility library for simplifying common programming tasks.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/zohaibsaeed117/Node-Tutorials.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Node-Tutorials
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

Each file in the repository demonstrates a specific concept or feature of Node.js. You can run these files using the `node` command.

**Example: Running the intro.js file**

```bash
node 1-intro.js
```

**Example: Starting the app.js server with nodemon**

```bash
npm start
```

This will start the server using `nodemon`, which automatically restarts the server whenever you make changes to the code.  You can then access the server in your browser at `http://localhost:5000` (or the port specified in `app.js`).

**Code Examples:**

*   **Reading a file asynchronously (10-fs-asyncFile.js):**

    ```javascript
    const { readFile, writeFile } = require('fs').promises;

    const start = async () => {
      try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
          './content/result-async.txt',
          `\nThis is awesome : ${first} ${second}`,
          { flag: 'a' }
        );
        console.log(first, second);
      } catch (error) {
        console.log(error);
      }
    };

    start();
    ```

*   **Creating a simple HTTP server (12-http.js):**

    ```javascript
    const http = require('http');

    const server = http.createServer((req, res) => {
      if (req.url === '/') {
        res.end('Welcome to our home page');
      } else if (req.url === '/about') {
        res.end('Here is our short history');
      } else {
        res.writeHead(404);
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
      }
    });

    server.listen(5000, () => {
      console.log('Server listening on port 5000');
    });
    ```

## Project Structure

```
Node-Tutorials/
├── content/
│   ├── first.txt
│   ├── second.txt
│   ├── result-async.txt
│   └── result-sync.txt
├── event loops example/
│   ├── 1-readFile.js
│   ├── 2-setTimeout.js
│   └── 3-setInterval.js
├── 2-asyncPatterns/
│   ├── 1-block.js
│   └── 2-awaitPatterns.js
├── 1-intro.js
├── 2-global.js
├── 3-modules.js
├── 4-names.js
├── 5-utils.js
├── 6-alternative-flavour.js
├── 7-osModule.js
├── 8-pathModule.js
├── 9-fs-syncFile.js
├── 10-fs-asyncFile.js
├── 12-http.js
├── 13-node modules.js
├── 14-event-emmiter.js
├── 15-request-event.js
├── 16-streams.js
├── app.js
└── package.json
```

*   `content/`: Contains text files used in file system operation examples.
*   `event loops example/`: Demonstrates the behavior of the Node.js event loop.
*   `2-asyncPatterns/`: Explores asynchronous programming patterns.
*   `1-intro.js`: A basic introduction to Node.js.
*   `2-global.js`: Demonstrates global variables in Node.js.
*   `3-modules.js`: Shows how to use CommonJS modules.
*   `4-names.js`, `5-utils.js`, `6-alternative-flavour.js`: Example modules for demonstrating modularity.
*   `7-osModule.js`, `8-pathModule.js`: Examples using the `os` and `path` core modules.
*   `9-fs-syncFile.js`, `10-fs-asyncFile.js`: Demonstrates synchronous and asynchronous file operations.
*   `12-http.js`: A basic HTTP server example.
*   `13-node modules.js`: Shows how to use third-party modules like `lodash`.
*   `14-event-emmiter.js`, `15-request-event.js`: Demonstrates the use of event emitters.
*   `16-streams.js`: Demonstrates the use of streams for handling large files.
*   `app.js`: An HTTP server that streams data from a large file.
*   `package.json`: Contains project metadata and dependencies.

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new tutorial, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
