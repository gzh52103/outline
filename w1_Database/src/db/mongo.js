const { MongoClient, ObjectId } = require('mongodb')


function connect() {
    // 连接mongoDB
    return new Promise((resolve, reject) => {
        MongoClient.connect(
            "mongodb://localhost:27017", 
            { useUnifiedTopology: true }, 
            function (err, client) {
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
async function insert(colName, data) {
    const { db, client } = await connect();
    const col = db.collection(colName);

    let result
    try {
        if (Array.isArray(data)) {
            await col.insertMany(data)
        } else {
            await col.insertOne(data);
        }
        result = true
    } catch (err) {
        result = false;
    }

    client.close();
    return result;
}


async function remove(colName, query = {}) {
    const { db, client } = await connect();
    const col = db.collection(colName);

    // 处理ObjectId
    // query = {_id:{$in:[id1,id2,id3]}}
    // query = {_id:"5c7632eaa5521b55587a204f"}
    if (query._id) {
        query._id = ObjectId(query._id)
    }

    let result
    try {
        await col.deleteMany(query)
        result = true;
    } catch (err) {
        result = false
    }

    client.close();
    return result;
}
// remove('user')
// remove('user',{_id:"5c128cdbd1233ce12c878a3c"})

/**
 * 
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 * @param {Object} newData  修改的数据（用户需自带操作符，如：{$set:{}}）
 */
async function update(colName, query, newData) {
    if (query === undefined) {
        throw new Error('更新操作必须包含匹配条件');
    }
    const { db, client } = await connect();
    const col = db.collection(colName);

    // 处理ObjectId
    if (query._id) {
        query._id = ObjectId(query._id)
    }

    let result
    try {
        await col.updateMany(query, newData)
        result = true;
    } catch (err) {
        result = false
    }

    client.close();
    return result;
}
// update('user',{age:{$gte:18}},{$set:{type:'成年'},$inc:{age:1}})
// update('user',{age:{$gte:18}},{$inc:{age:-2}})

/**
 * 
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function find(colName, query, { limit, skip } = {}) {
    const { db, client } = await connect();
    // 获取集合
    const col = db.collection(colName)

    let result = col.find(query)

    // 跳过数量
    if (skip) {
        result = result.skip(skip);
    }

    // 控制数量
    if (limit) {
        result = result.limit(limit)
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