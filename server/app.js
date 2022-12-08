const express = require("express");
const app = express();
const PORT = 8080;
// Todo 라우터 추가
const todoRouter = require("./routes/todo");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Todo 라우터로 옮김
// app.get("/", (req, res) => {
//     res.send("hello!");
// });
app.use("/", todoRouter); // 기본주소: localhost:PORT

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
