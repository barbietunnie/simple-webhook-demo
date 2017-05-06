const { json } = require('micro');

module.exports = async req => {
    const data = await json(req);

    console.log('---   Webhook invoked    ---');
    console.log(data);
}