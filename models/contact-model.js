const {Schema,model} = require('mongoose');


const contactScheme = new Schema({
    username:{
        type: String,
        required:true, 
    },
    email:{
        type: String,
        required:true, 
    },
    message:{
        type: String,
        required:true, 
    },
});

//create a model or a collection

const Contact = new model('Contact', contactScheme);
module.exports= Contact;
