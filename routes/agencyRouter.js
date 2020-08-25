const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Agencys = require('../models/agency'); 

const agencyRouter = express.Router();

agencyRouter.use(bodyParser.json());

// agencyS ROUTE
agencyRouter.route('/')
.get((req,res,next) => {
  Agencys.find({})
    .then((agencys) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(agencys);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Agencys.create(req.body)
    .then((agency) => {
        console.log('agency Created ', agency);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(agency);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /agencys');
})
.delete((req, res, next) => {
    Agencys.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

// agency_IDs ROUTE
agencyRouter.route('/:agencyId')
.get((req,res,next) => {
    Agencys.findById(req.params.agencyId)
    .then((agency) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(agency);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /agencys/'+ req.params.agencyId);
})
.put((req, res, next) => {
    Agencys.findByIdAndUpdate(req.params.agencyId, {
        $set: req.body
    }, { new: true })
    .then((agency) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(agency);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Agencys.findByIdAndRemove(req.params.agencyId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = agencyRouter;
