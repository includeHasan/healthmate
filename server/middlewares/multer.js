const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');

// Multer configuration: memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// AWS S3 client setup
const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_REGION
});

// Upload to S3 function
const uploadToS3 = async (file, folderName) => {
    const key = `${folderName}/${uuidv4()}-${file.originalname}`;
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    return key;
};

// Upload profile picture
const uploadProfilePicture = async (file) => {
    return await uploadToS3(file, 'profile-pictures');
};

// Upload document
const uploadDocument = async (file) => {
    return await uploadToS3(file, 'documents');
};

module.exports = {
    upload,
    uploadProfilePicture,
    uploadDocument
};

