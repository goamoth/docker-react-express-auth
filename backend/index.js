import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );

app.use(cors({
   origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
   res.json("Docker-react-express-auth API! Sasa Georgy!");
});

app.listen(PORT, () => {
   console.log('Listening to port ' + PORT);
});
