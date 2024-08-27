kuch bhi db me changes kroge prisma ke thorugh toh ye command run krna changes krne ke baad

npx prisma migrate dev --name init

emebeded document data type in prisma is
  (only for pg)


model EmbeddedPost {
  id          String   @id @default(uuid())
  content     String   @db.Text
embedding   Unsupported("vector(384)")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}