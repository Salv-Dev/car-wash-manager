const { tb_completedSchedule } = require('./../models/database');

exports.getCompletedSchedule = (req, res, next) => {
    res.json(tb_completedSchedule);
}

exports.postCompletedSchedule = (req, res, next) => {
    const { id, client_name, date, service} = req.body;
    const schedule = {
        id,
        client_name,
        date,
        service
    }
    tb_completedSchedule.push(schedule);

    io.emit('getCompletedService', schedule);

    res.status(201).json({
        success: "201 - created",
        schedule
    })
}