const { MongoClient, ObjectId } = require('mongodb')


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

/**
 * 
 * @param {String}          colName          集合名称
 * @param {Object|Array}    data             添加的数据
 * @returns 
 */
function insert(colName,data) {
    const {db,client} = await connect();
    const col = db.collection(colName);

    let result
    try{
        if(Array.isArray(data)){
            await col.insertMany(data)
        }else{
            await col.insertOne(data);
        }
        result = true
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}


function remove(colName,query={}) {
    const {db,client} = await connect();
    const col = db.collection(colName);

    // 处理ObjectId
    if(query._id){
        query._id = ObjectId(query._id)
    }

    let result
    try{
        await col.deleteMany(query)
        result = true;
    }catch(err){
        result = false
    }
    
    client.close();
    return result;
}
// remove('user')
// remove('user',{_id:"5c128cdbd1233ce12c878a3c"})

function update() {

}
/**
 * 
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function find(colName, query, {limit,skip}={}) {
    const { db, client } = await connect();
    // 获取集合
    const col = db.collection(colName)

    let result = col.find(query)

    // 控制数量
    if(limit){
        result = result.limit(limit)
    }

    // 跳过数量
    if(skip){
        result = result.skip(skip);
    }

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