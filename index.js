const express = require ('express');
const cors  = require ('cors');
const wordRoutes = require('./routes/wordRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', wordRoutes)





const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on the ${PORT}`); 
})