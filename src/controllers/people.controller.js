const People = require("../models/people");
const Aleatorys = require("../aleatori");
const peopleCtrl = {};

peopleCtrl.getPeoples = async (req, res, next) => {
    const peoples = await People.find();
    res.json(peoples);
};

peopleCtrl.createPeople = async (req, res, next) => {
    const people = new People({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDat: req.body.birthDat,
        birthFrom: req.body.birthFrom,
        DPI: req.body.DPI,
        genre: req.body.genre,
        father: req.body.father,
        mother: req.body.mother,
        estate: 1
    });
    await people.save();
    res.json({status: "Persona Ingresada"});
};

peopleCtrl.getPeople = async (req, res, next) => {
    const { id } = req.params;
    const peoples = await People.findById(id);
    res.json(peoples);
};

peopleCtrl.getPeopleLast = async (req, res, next) => {
    const { last } = req.params;
    const peoples = await People.find({"lastName": last});
    res.json(peoples);
};

peopleCtrl.getPeopleDPI = async (req, res, next) => {
    const { dpi } = req.params;
    const peoples = await People.find({"DPI" : dpi});
    res.json(peoples);
}

peopleCtrl.editPeople = async (req, res, next) => {
    const { id } = req.params;
    await People.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({status: "Persona Actualizada"});
}

peopleCtrl.deletePeople = async (req, res, next) => {
    const { id } = req.params;
    await People.findOneAndRemove(id);
    res.json({status: "Persona Removida"});
}

peopleCtrl.pushToken = async (req, res, next) => {
    const { id } = req.params;
    const aleatory = generateRandomString(10);
    await People.findByIdAndUpdate(id, {$push: {"tok": aleatory, "datet": Date.now()}}, {new: true});
    res.json({status: "Token Generado"});  
}

module.exports = peopleCtrl;