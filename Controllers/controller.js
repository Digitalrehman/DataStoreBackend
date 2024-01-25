const User = require("../model/Schema");
let Controllers = {
  check: (req, res) => {
    res.send("All Good");
  },
  Post_Data: (req, res) => {
    let { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.json({
        message: "Required are missing",
      });
      return;
    }
    let user_Data = {
      name,
      email,
      phone,
    };
    User.create(user_Data)

      .then((response) => {
        res.json({
          status: true,
          message: "Data Inserted Successfully",
          data: response,
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          message: "Data Insertion Failed",
          data: err,
        });
      });
  },

  Get_Data: (req, res) => {
    User.find()
      .then((response) => {
        res.json({
          status: true,
          message: "Data Fetched Successfully",
          data: response,
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          message: "Error in fetching Data",
          data: err,
        });
      });
  },
  Put_Data: (req, res) => {
    let { id, ...updatedata } = req.body;
    User.findByIdAndUpdate(id, updatedata, { new: true })
      .then((response) => {
        res.status(200).json({
          status: true,
          message: "Update API Successfully",
          Data: response,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: false,
          message: "Update API Failed",
        });
      });
  },
  Delete_Data: (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id)
      .then((response) => {
        res.json({
          status: true,
          message: "User Deleted",
          data: response,
        });
      })
      .catch((error) => {
        res.json({
          status: false,
          message: "Failed to Delete User",
          data: error,
        });
      });
  },
};
module.exports = Controllers
