export default  {
    multipleHandleMongoose : (mongooseHandle) => {
        const mog = mongooseHandle.map(mongoose => mongoose.toObject())
        return {mog}
    },
    singleHandleMongoose : (mog) => {
        return mog ? mog.toObject() : {mog}
    }
}