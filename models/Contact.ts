
import mongoose, { Model, Schema } from 'mongoose';
import { IContact } from '../interfaces/';


const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    status: {
        type: String,
        enum: {
            values: ['new', 'delete','read', 'important'],
            message: '{VALUE} no es un estado permitido'
        },
        default: 'new',
    },
    createdAt: { type: Number },
});


const ContactModel: Model<IContact> = mongoose.models.Contact || mongoose.model('Contact', contactSchema );

export default ContactModel;
