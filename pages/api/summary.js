import Summary from '../../models/Summary';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req,res) => {
    try{
        jwt.verify(req.headers.authorization,
            process.env.JWT_SECRET)
            const summaries = await Summary.find();
            res.status(200).json({summaries})
    }catch(error){
        console.error(error)
        res.status(401).send('please login.')
    }
}