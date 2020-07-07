const instrumentsRouter = async (app, db) => {    
    /// GET
    app.get("/instruments", (req, res) => {    
        db.getAll().then(function(data) {     
            res.status(200).send(data);
        });

    });

    // POST
    app.post("/instruments", (req, res) => {

        var newInstrument = req.body;

        db.create(newInstrument).then(function(created){
            if (created) {
                res.status(200).send(created);
            } else {
                res.status(500).send();
            }
        });

      });

    app.delete("/instruments/:id", (req, res) => {
        const instrumentId = req.params["id"];

        db.delete(instrumentId).then(function(deleted){
            if (deleted) {
                res.status(200).send();
            } else {
                res.status(500).send();
            }
        });
    });
      
};


module.exports = instrumentsRouter;