import mongoose from 'mongoose';


const dbConnection = async () =>{
    const credentials:string = process.env.MONGODB_CNN || "";
    try {
        await mongoose.connect(credentials);

        console.log(">>> Connected to DB ");
    } catch (error) {
        throw new Error("Error al iniciar DB",);
    }
}

export default dbConnection;