const { tb_clients } = require('../models/database');

exports.getClients = (req, res, next) => {
    if(Object.entries(req.query).length > 0){
        const query = Object.entries(req.query);
        let clients = [];
        for(let i = 0; i < query.length; i++) {
            clients = tb_clients.filter(client => client[query[i][0]] == query[i][1]);
        }
    
        if(clients.length < 1) {
            res.status(404).json({
                error: "404 - Not Found"
            });
        } else {
            res.json(clients);
        }

    } else {
        res.json(tb_clients);
    }
}

exports.getClientById = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            error: "400 - Bad Request"
        });
    }
    const client = tb_clients.filter(cl => cl.id == req.params.id);

    if(client.length < 1) {
        res.status(404).json({
            error: "404 - Not Found"
        });
    }

    res.json(client);
}

exports.postClient = (req, res, next) => {
    const { name, phone } = req.body;

    const client = {
        id: tb_clients.length == 0 ? 1 : tb_clients[tb_clients.length-1].id+1,
        name,
        phone
    }

    tb_clients.push(client)

    io.emit('getAddClient', client);

    res.status(201).json({
        success: "201 - created",
        client
    })
}

exports.putClient = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            error: "400 - Bad Request"
        });
    }

    const client = tb_clients.find(cl => cl.id == req.params.id);

    if(client != undefined) {
        const { name, phone } = req.body;
        name != undefined ? client.name = name : null;
        phone != undefined ? client.phone = phone : null;

        res.status(200).json({
            success: "200 - success"
        });
    } else {
        res.status(404).json({
            error: "404 - Not Found"
        })
    }
}

exports.deleteClient = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            error: "400 - Bad Request"
        });
    }

    const index = tb_clients.findIndex(cl => cl.id == req.params.id);

    if(index == -1) {
        res.status(404).json({
            error: "404 - Not Found"
        });
    } else {
        tb_clients.splice(index, 1);
        res.status(200).json({
            success: "200 - success"
        });
    }
}