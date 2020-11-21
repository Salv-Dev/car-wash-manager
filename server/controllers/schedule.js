const { tb_scheduling } = require('../models/database');

exports.getSchedule = (req, res, next) => {
    if(Object.entries(req.query).length > 0){
        const query = Object.entries(req.query);
        let schedules = [];
        for(let i = 0; i < query.length; i++) {
            schedules = tb_scheduling.filter(schedule => schedule[query[i][0]] == query[i][1]);
        }
    
        if(schedules.length < 1) {
            res.status(404).json({
                error: "404 - Not Found"
            });
        } else {
            res.json(schedules);
        }

    } else {
        res.json(tb_scheduling);
    }
}

exports.getScheduleById = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            error: "400 - Bad Request"
        });
    }
    const schedule = tb_scheduling.filter(cl => cl.id == req.params.id);

    if(schedule.length < 1) {
        res.status(404).json({
            error: "404 - Not Found"
        });
    }

    res.json(schedule);
}

exports.postSchedule = (req, res, next) => {
    const { client_name, date, service } = req.body;

    const schedule = {
        id: tb_scheduling.length == 0 ? 1 : tb_scheduling[tb_scheduling.length-1].id+1,
        client_name,
        date,
        service
    }

    tb_scheduling.push(schedule)

    io.emit('getAddService', schedule);

    res.status(201).json({
        success: "201 - created",
        schedule
    })
}

exports.putSchedule = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            error: "400 - Bad Request"
        });
    }

    const schedule = tb_scheduling.find(cl => cl.id == req.params.id);

    if(schedule != undefined) {
        const { client_name, date, service } = req.body;
        client_name != undefined ? schedule.client_name = client_name : null;
        date != undefined ? schedule.date = date : null;
        service != undefined ? schedule.service = service : null;

        io.emit('editService', schedule);

        res.status(200).json({
            success: "200 - success"
        });
    } else {
        res.status(404).json({
            error: "404 - Not Found"
        })
    }
}

exports.deleteSchedule = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            error: "400 - Bad Request"
        });
    }

    const index = tb_scheduling.findIndex(sc => sc.id == req.params.id);

    if(index == -1) {
        res.status(404).json({
            error: "404 - Not Found"
        });
    } else {
        tb_scheduling.splice(index, 1);
        res.status(200).json({
            success: "200 - success"
        });
        io.emit('getRemovedService', { id: parseInt(req.params.id) });
    }
}