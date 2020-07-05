const c = require('config');


const instrumentsRouter = async (app, db) => {    
    /// GET
    app.get("/instruments", (req, res) => {    
        var data = db.getAll();
        
        res.status(200).send(data);
    });

    // POST
    app.post("/instruments", (req, res) => {

        var newInstrument = req.body;

        var newEntity = db.create(newInstrument);

        if (newEntity) {
            res.status(200).send(newEntity);
        }
      });

    app.delete("/instruments/:id", (req, res) => {
        const instrumentId = req.params["id"];

        var deleted = db.delete(instrumentId);

        if (deleted) {
            res.status(200).send();
        }
    });
      
};


module.exports = instrumentsRouter;