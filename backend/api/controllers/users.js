const UserModel = require('../dbmodels/User');

const userController = {
    findAll(req, res) {
        UserModel.find({})
            .then((user) => res.send(user))
            .catch((e) => res.status(500).send(e));
    },
    findById(req, res) {
        UserModel.findById(req.params.id)
            .populate("ataques")
            .then((user) => res.send(user))
            .catch((e) => res.sendStatus(404).send(e));
    },

    createUser(req, res) {
        UserModel.create(req.body)
            .then((newUser) => res.status(201).send(newUser))
            .catch((e) => res.sendStatus(404).send(e));
    },

    editUser(req, res) {
        UserModel.findByIdAndUpdate(req.params.id, req.body)
            .then(editedUser => res.status(200).send(editedUser))
            .catch(e => res.sendStatus(404).send(e));
    },

    deleteUser(req, res) {
        UserModel.findByIdAndDelete(req.params.id)
            .then(deleteUser => res.status(201).send(deleteUser))
            .catch(e => res.sendStatus(404).send(e));
    },

};

module.exports = userController;