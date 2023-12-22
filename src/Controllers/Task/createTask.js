const { TaskModel } = require("../../Models/models");

const createTask = async (req, res) => {
   try {
      const task = req.body;
      const result = await TaskModel(task).save();

      if (!result._id) {
         res.status(500).end();
         return;
      }
      res.status(200).json({ id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export module
module.exports = createTask;
