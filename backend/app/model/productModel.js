module.exports = function ProductModel(db) {
    const collection = db.collection("products");
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                collection.find({}).toArray((err, docs) => {
                    if (err) reject(err);
                    resolve(docs);
                });

            });
        },
        getOne: (id) => {
            return "Hola!!"
        }
    }
}