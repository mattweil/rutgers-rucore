<h1>RU Core</h1>

RU Core is a JavaScript application that allows Rutgers students to quickly find classes that satisfy core requirements.

## Getting Started

  To begin, install the dependencies required by running executing the following command within the project folder:

```bash
$ npm install
```

  Then you can initialize server the by executing the following command:

```bash
$ npm start
```

  Since RU Core was designed using MongoDB, you must be running a MongoDB instance locally. You can do this by running the command provided below after completing the MongoDB installation.
```bash
mongod
```

 Once your database is up and running you can now fill it with course data using the [Rutgers SOC Parser](https://github.com/mattweil/rutgers-soc-parser). Simply run the program and type the following command:
```bash
rucore
```
## License

  [ISC](https://opensource.org/licenses/ISC)
