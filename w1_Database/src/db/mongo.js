const { MongoClient } = require('mongodb')


function connect() {
    // 连接mongoDB
    return new Promise((resolve, reject) => {
        MongoClient.connect("mongodb://localhost:27017", function (err, client) {
            if (err) throw err;

            // 连接数据库，无则自动创建
            let db = client.db('laoxie');

            resolve({
                db,
                client
            })


        });

    })
}

function insert() {

}
function remove() {

}
function update() {

}
/**
 * 
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function find(colName, query) {
    const { db, client } = await connect();
    // 获取集合
    const col = db.collection(colName)

    const result = col.find(query)

    const data = await result.toArray();

    // 关闭数据库连接
    client.close()

    return data;
}

module.exports = {
    insert,
    remove,
    update,
    find,
}