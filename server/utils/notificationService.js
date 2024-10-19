const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const sendNotification = async (recipientId, message, type) => {
   try {
      // Save the notification in the database
      const notification = await prisma.notification.create({
         data: {
            message,
            type, // ENUM type (e.g., APPOINTMENT, REMINDER, etc.)
            recipient: {
               connect: { id: recipientId }  // Associate the notification with a recipient (User)
            }
         }
      });

      // You can add additional logic to send email/SMS/push notification here
      console.log(`Notification sent to recipient ${recipientId}:`, message);

      return notification; // Return the notification object if needed
   } catch (error) {
      console.error("Error sending notification:", error);
      throw new Error("Failed to send notification");
   }
};

module.exports = {
   sendNotification
};
