const app = require("express")();
const clientRoutes = require("./routes/clientRoutes")

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Word! Potato!");
});

app.use('/', clientRoutes);

app.listen(port, () => {
    console.log(`Port 3000`);
});