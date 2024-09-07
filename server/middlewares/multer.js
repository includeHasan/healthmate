const multer = require('multer');
const path = require('path');
const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3')
const {v4:uuidv4} = require('uuid')

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const s3 = new S3Client({
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    },
    region:process.env.AWS_REGION
})

const uploadToS3 = async(file) => {
    const key = `${uuidv4()}-${file.originalname}`
    const params = {
        Bucket:process.env.AWS_BUCKET_NAME,
        Key:key,
        Body:file.buffer,
        ContentType:file.mimetype
    }
    const command = new PutObjectCommand(params)
    await s3.send(command)

    return key
}

module.exports = {upload,uploadToS3}

