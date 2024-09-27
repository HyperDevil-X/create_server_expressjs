const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (request,response) => {
    response.send ("Welcome to a new express server!");
});

const start = async () =>{
    try {
        app.listen(PORT , () =>
        {
            console.log(`Server is running on port ${PORT}`);
        })}
        catch(error)
        {
            console.error(`Error starting server: ${error}`);
        }
}

start();