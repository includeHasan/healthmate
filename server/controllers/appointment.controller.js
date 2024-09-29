var {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient()

const createAppointment=async (req,res)=>{
    try {
        const {doctorId,patientId,appointmentDate,appointmentTime}=req.body
        const appointment=await prisma.appointment.create({
            data:{
                doctorId,
                patientId,
                appointmentDate,
                appointmentTime
            }
        })
        res.status(201).json({success:true,message:"Appointment created successfully",appointment})
    } catch (error) {
        console.error("Error creating appointment:",error)
        res.status(500).json({success:false,error:error.message})
    }
}
