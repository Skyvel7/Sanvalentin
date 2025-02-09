const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public")); // Asegúrate de que tus archivos están en "public"

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
