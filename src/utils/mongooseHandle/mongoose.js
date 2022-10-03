export default  {
    multipleHandleMongoose : (mongooseHandle) => {
        const mog = mongooseHandle.map(mongoose => mongoose.toObject())
        return {mog}
    },
    singleHandleMongoose : (mongooseHandle) => {
        return mongooseHandle ? mongooseHandle.toObject() : mongooseHandle
    }
}