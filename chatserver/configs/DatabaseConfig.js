const { connect } = require("mongoose");

async function DatabaseConnection(url) {
  connect(url)
    .then(() => console.log("Database Connection Successful"))
    .catch((err) => console.log("Failed to Connect Database, Error : ", err));
}

module.exports = DatabaseConnection;
