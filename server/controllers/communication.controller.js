const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const notificationService = require('../utils/notificationService');
const {sendEmail} = require('../utils/email');

const vcDoc = async (req, res) => {
   const { userId } = req.user;
   const { docterId } = req.params;
   const callId = Math.floor(Math.random() * 1000);
   const baseUrl = 'https://healthhmate.vercel.app/videocall/room'; 
   const callLink = `${baseUrl}/${callId}`;

   try {
      // Fetch user info
      const user = await prisma.user.findUnique({ where: { id: userId } });
      const doctor = await prisma.user.findUnique({ where: { id: docterId } });

      if (!user || !doctor) {
         return res.status(404).json({
            success: false,
            message: "User or doctor not found"
         });
      }

      // Send notification to the doctor
      await notificationService.sendNotification(docterId, {
         message: `You have a new call request from user ${user.name}. Call ID: ${callId}`
      });

      // Send email to the doctor
      await sendEmail(doctor.email,
          'New Call Request',
          `You have a new call request from user ${user.name}. Call ID: ${callId}. You can join the call using the following link: ${callLink}`
      );

      res.status(200).json({
         success: true,
         data: { callId },
         message: "Call initiated, notification and email sent"
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Failed to initiate call, send notification and email"
      });
   }
};
module.exports = {
   vcDoc
};
