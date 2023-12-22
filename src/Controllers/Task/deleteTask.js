const { TaskModel } = require("../../Models/models");

const deleteTask = async (req, res) => {
   try {
      const { id } = req.params;
      console.log(id);
      const result = await TaskModel.findByIdAndDelete(id);
      res.status(200).json({ id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export module
module.exports = deleteTask;
