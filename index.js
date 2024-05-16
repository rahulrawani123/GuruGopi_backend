const express = require('express');
require("./db/config")
const User = require("./db/contactusData");
const contactusData = require('./db/contactusData');
const Doctors_data = require('./db/Doctors_data')
const cors = require('cors')


const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())



app.post('/contactus_data', (req, res) => {
    const {  first_name,last_name,mobile_no,email,message } = req.body;

    const user = new contactusData({  first_name,last_name,mobile_no,email,message });
    user.save()
    .then(() => {
        res.status(200).send('Signup successful');
    })
    .catch(err => {
        res.status(500).send('Signup failed');
    });

    
});

app.get('/contact_data', async (req, res) => {
    try {
        const data = await contactusData.find();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data:', error);
    }
});

app.get('/book_appointement', async (req, res) => {
    try {
        const data = await Doctors_data.find();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data:', error);
    }
});

app.get('/appointement_data/:id', async (req, res) => {
    try {
      const data = await Doctors_data.findById(req.params.id);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });


app.delete('/contact_data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await contactusData.findByIdAndDelete(id);
        res.status(200).send('Data deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting data:', error);
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


