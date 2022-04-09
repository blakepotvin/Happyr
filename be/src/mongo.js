const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = class Mongo {
    constructor(client, db_name, collection_name) {
        this.client = client;
        this.db_name = db_name;
        this.collection_name = collection_name;
    }

    async init() {
        await this.client.connect();
        this.db = this.client.db(this.db_name);
        this.collection = this.db.collection(this.collection_name);
    }

    async close() {
        await this.client.close();
    }

    async add(doc) {    
        await this.collection.insertOne(doc);
    }

    async find(query) {

        const options = {
            
        };
    
        const cursor = this.collection.find(query, {});
    
        if ((await this.collection.countDocuments()) == 0) {
            console.log("None found !!!");
        } else {
            let arr = [];
            for (const doc of await cursor.toArray()) {
                // console.log(doc);
                arr.push(doc);
            }
            return arr;
        }
    
    }

    async cleardb() {
        const result = await this.collection.deleteMany();
        console.log("Deleted " + result.deletedCount + " records");
    }


}

/*
DB Structure
{
    first: string,
    last: string,
    phone: string,
    email: string,
}
*/








