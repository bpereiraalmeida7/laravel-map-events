const express = require('express');
const routes = express.Router();


const EventsController = require('./controllers/EventsController');


routes.get("/events", EventsController.index);
routes.get("/events/:id", EventsController.show);
routes.post("/events", EventsController.store);


module.exports = routes;