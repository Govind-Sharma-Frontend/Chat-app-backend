const mongoose = require("mongoose");
const app = require("./App");
const port = process.env.PORT || 5000;
// mongoose.connect("mongodb://localhost:27017/ChatApi").then(() => {
// });
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
