// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IContact } from '../../../interfaces/contact';
import { db } from '../../../database';
import { Contact } from '../../../models';


type Data =
    | { message: string }
    | IContact[]
    | IContact

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':

            return getContacts(res);

        case 'POST':

            return createContact(req, res);

        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}


const getContacts = async (res: NextApiResponse<Data>) => {

    try {

        await db.connect();
        const contacts = await Contact.find().sort({ createdAt: 'ascending' })
        await db.disconnect();

        return res.status(200).json(contacts);
    } catch (error) {
        await db.disconnect();
        console.log(error);
        return res.status(500).json({ message: 'Algo salio mal, revisar consola del servidor' });
    }

}

const createContact = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { name, email, message, phoneNumber } = req.body;
    const newContac = new Contact({
        name,
        email,
        message,
        phoneNumber,
        status: 'new',
        createdAt: Date.now(),
    });
    try {
        await db.connect();
        await newContac.save();
        await db.disconnect();

        return res.status(201).json(newContac);

    } catch (error) {
        await db.disconnect();
        console.log(error);
        return res.status(500).json({ message: 'Algo salio mal, revisar consola del servidor' });
    }
}
