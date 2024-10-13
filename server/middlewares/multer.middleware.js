const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const s3Client = new S3Client({
    forcePathStyle: true,
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

const uploadToS3 = async (file, doctorId, fileType) => {
    try {
        baseUrl="https://jacgmamtcipvliqalaiz.supabase.co/storage/v1/object/public/documents/"
        const key = `${doctorId}/${fileType}/${file.originalname}`;
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype
        };
        const command = new PutObjectCommand(params);
        await s3Client.send(command);
        const wholeUrl=baseUrl+key
        return wholeUrl;
    } catch (error) {
        console.error('Error uploading to S3:', error);
        throw new Error('Failed to upload file to storage');
    }
};

const uploadProfilePicture = async (file, doctorId) => {
    return await uploadToS3(file, doctorId, 'profile-picture');
};


const uploadDocument = async (file, doctorId) => {
    return await uploadToS3(file, doctorId, 'documents');
};

module.exports = {
    upload,
    uploadProfilePicture,
    uploadDocument
};
