const mongoose = require('mongoose');
const feedbackmodel = require('../db/feedbackdb')

module.exports = {
    insertfeedback: async (req, res) => {
        feedback = new feedbackmodel(req.body);

        const result = await feedback.save();
        if (result) {
            return res.send(JSON.stringify('Feedback give Successsfully'));
        }

    },
    selectfeedbackById: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await feedbackmodel.findById(req.params.id);
            if (result) {
                console.log(result);
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
    selectfeedback: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await feedbackmodel.find();
            if (result) {
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
};