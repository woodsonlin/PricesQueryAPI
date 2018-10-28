const crypto=require('crypto');

//加密方法
exports.encrypt = (data, key) => {
    //注意，第二个参数是Buffer类型
    return crypto.publicEncrypt(key, Buffer.from(data)).toString('base64');
};

//encrypted 是 base64编码
exports.decrypt = (encrypted, key) => {
    // 注意，第二个参数是Buffer类型
    return crypto.privateDecrypt(key, new Buffer.from(encrypted, 'base64'));
}

exports.md5crypt = (data) => {
    const hash = crypto.createHash('md5');
    return hash.update(data).digest('hex');
}