const mongoose = require('mongoose');

const Event = mongoose.model('Event');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const events = await Event.paginate({}, {page , limit: 10});

        return res.json(events);
    },

    async show(req, res){
        const event = await Event.findeOne({events: new RegExp('^'+ req.params.string)}, function(err, results){
            if (results){
                res.status(200).json(results);
            }else{
                res.status(400).json(err);
            }
        });

        return res.json(event);
    },

    async store(req, res){
        const event = await Event.create(req.body);

        return res.json(event);
    }
};