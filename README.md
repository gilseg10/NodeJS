# NodeJS Projects Repository

## Introduction

Welcome to my NodeJS repository! This repository is a collection of various home assignments that I've worked on involving Node.js. Each assignment is an exploration of different aspects of Node.js and its ecosystem.

## Assignments

Below is a list of small programs contained in this repository. Each program has its own folder and README file with more details.

- **Microservices**: This program demonstrats the use of web-services.
  - There are two servers communicating (Data sources are json files and external webservice).
  - The seconde web-service (WS2) receives products data from external WS [fakestoreapi](https://fakestoreapi.com/products) and returns minimized products data only with id and title.
  - The first web-service (WS1) receives data from WS2 and orders.json and returns an array of jsons with data about the products with their orders (if exists).

![image](https://github.com/gilseg10/NodeJS/assets/157500311/eb5da515-818c-4cd0-a3d9-9911217b30c2)
 
- **Server with DB**: Small program to demonstrate Back-End server with MongoDB called “studentDB”.
  - The DB has two collections: Student and Grade.
  - The "Student" collection contains: name, city and faculty; and the "Grade" collection contains related student_id, profession and score.
  - Each student can have multiple grades in the “Grade” collection.
  - The server exposes several end points that make use these two collections. One main end point is: <ins>/student/category/withgrades</ins> that returns all students with their grades.     

- **GraphQL**: GraphQL based server that works with MongoDB.
  - The server provides the several products services:
    - Get All Products, Get Product by id, Add/Update/Delete product,
    - Get all products expensive from a given price,
    - Update only Product price,
    - Delete all products for a given color.
  - Each product has: id, name, color, price.
