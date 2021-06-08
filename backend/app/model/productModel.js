module.exports = function ProductModel(db) {
    const collection = db.collection("products");
    return {
        all: () => {
            collection.find({}).toArray((err, docs) => {
                if (err) return next(err);
                return docs;
            });
        },
        getOne: (id) => {
            return "Hola!!"
        }
    }
}