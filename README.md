# NodeJS Domain Driven Design Carona-UFG Microservices example

This is a repo to demonstrate the use of [Domain Driven Design (DDD)](https://github.com/p0w34007/ebooks/blob/master/Eric%20Evans%202003%20-%20Domain-Driven%20Design%20-%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software.pdf) and microservices for NodeJS.

The domain chosen was the [CaronaUFG](https://github.com/moiseshilario/Carona-UFG) one.

### Stack
- ReactJS 16.2.0
- NodeJS 8.9.1
- MongoDB 3.4.10

### Microservices

- [Trips Rest Service](./trips-rest)

### How to run

Before all, download and install mongodb in your user folder and execute the repository start script
```
$ cd repository/
$ ./start.sh/
```

Which sets mongodb running for the repository to work.

Then, run the *Rest API* projects and if everything works fine, you'll see the host and port server message `listening at port http://localhost:5000`.

And run the *React* front-end project to see on-screen results.

That's it!

### Reference

- [Build a NodeJS cinema microservice and deploying it with docker (part 1)](https://medium.com/@cramirez92/build-a-nodejs-cinema-microservice-and-deploying-it-with-docker-part-1-7e28e25bfa8b)

