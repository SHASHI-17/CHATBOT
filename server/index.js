const express =require('express');
require('dotenv').config();
const morgan=require("morgan");
const cors=require("cors");
const app =express();


app.use(cors({
    origin:"http://localhost:3000"
}));

app.use(express.json());
app.use(morgan('common'));
app.use('/app/v1',require("./routes/answer"));




const PORT = process.env.PORT || 4001;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
