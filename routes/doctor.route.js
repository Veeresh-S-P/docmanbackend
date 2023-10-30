const { Router } = require('express');
const { EmployeeModel } = require('../model/doctor.model');
const { auth } = require('../middleware/auth');

const docRouter = Router()

docRouter.post('/appointments', async (req, res) => {
    
    
    try {
      
        const newAppointment = new Appointment(req.body);
      
        await newAppointment.save();
      res.json(newAppointment);
    }catch (error) {
      
        res.status(500).send('Error creating appointment');
    }
  });
  
  
  docRouter.get('/appointments', async (req, res) => {
    try {
      const allAppointments = await Appointment.find();
      res.json(allAppointments);
    } catch (error) {
      res.status(500).send('Error retrieving appointments');
    }
  });

  docRouter.get('/appointments', (req, res) => {
    res.json(appointments);
  });
  
  

  docRouter.get('/appointments/filter/:specialization', (req, res) => {
    
    const { specialization } = req.params;
    const filteredAppointments = appointments.filter(appointment => appointment.specialization === specialization);
    res.json(filteredAppointments);
  });
  


  docRouter.get('/appointments/sort', (req, res) => {
    const sortedAppointments = [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date));
    res.json(sortedAppointments);
  });
  
  
  docRouter.get('/appointments/search/:name', (req, res) => {
    const { name } = req.params;
    const searchResults = appointments.filter(appointment => appointment.name.toLowerCase().includes(name.toLowerCase()));
    res.json(searchResults);
  });
  
 
  docRouter.put('/appointments/:id', (req, res) => {
    const { id } = req.params;

    const updatedAppointment=eq.body;

    const index=appointments.findIndex(appointment => appointment.id === id);
   
   
    if(index !== -1) {
     
        appointments[index] = updatedAppointment;
      res.json(updatedAppointment);
    }else {
      res.status(404).send('Appointment not found');
    }
  });
  
  
  docRouter.delete('/appointments/:id', (req, res) => {
    const { id } = req.params;

    const index = appointments.findIndex(appointment => appointment.id === id);
  
      if(index!==-1){

      const deletedAppointment = appointments.splice(index, 1)[0];
      res.json(deletedAppointment);
    }else {
       
       
        res.status(404).send('Appointment not found');
    }
  });




  module.exports = docRouter;
  