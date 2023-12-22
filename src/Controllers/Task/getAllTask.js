const { TaskModel } = require("../../Models/models");

const getAllTask = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await TaskModel.find({ email });
      res.status(200).json(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export module
module.exports = getAllTask;
