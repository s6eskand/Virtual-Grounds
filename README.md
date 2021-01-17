# Virtual Grounds

### About the application

It goes without saying that 2020 presented a multitude of challenges for individuals.

March came by and suddenly we were all in quarantine, trapped at home with nothing to do and nowhere to go.

Some of us found things to do, learned new skills, took up interesting hobbies.

Unfortunately, not everyone was in either a financial situation, mental or emotional state to be able to motivate themselves to do something productive with all their free time. 

In addition, we were forced to transition to remote learning and work. 

That’s why we came up with the idea of Virtual Grounds. 

Virtual Grounds allows users to connect with others in online chat rooms, being automatically placed with those who have similar interests, and are of the same age.
Virtual Grounds also provides an online Kanban board, allowing users to keep track of daily, weekly, or monthly tasks. With a single click of a button, users get analytics on their productivity, showing them how many hours they dedicated to each task, as well as the amount of down time they have to try new things out.

### Tech Stack

**Frontend**
  * React
    * UI framework the application was written in
  * JavaScript
    * Language the frontend was written in
  * Redux
    * Library used for state management in React
  * Redux-Sagas
    * Library used for asynchronous requests and complex state management
    
___Backend and Frontend connected through REST API as well as Websockets (for chat)___
    
**Backend**
  * Django
    * Backend framework the application was written in
  * Python
    * Language the backend was written in
  * Django Rest Framework
    * built in library to connect backend to frontend
  * Django Channels
    * built in library to build a Websocket ASGI application on your Django server

**Database**
  * CockroachDB
    * used for data storage of Users, Tasks, Profiles, etc.
    * distributed transactions allow us to serve two different hosts with ease, using CockroachDB to its full capabilities
    * Cloud native storage allows for scalibility, as well as uniform data amongst developers, rather than relying on your local machine
