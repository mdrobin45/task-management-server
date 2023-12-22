const { TaskModel } = require("../../Models/models");

const getAllTask = async (req, res) => {
   try {
      const result = await TaskModel.find({});
      res.status(200).json(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export module
module.exports = getAllTask;
