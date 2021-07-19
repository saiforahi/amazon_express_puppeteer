const schedule = require('./plateform/amazon');
//const schedule = require('./orderSchedule')
//const test = require('./test');
const scrapper = async (amazon_buyer_account) => {
    const result = schedule(amazon_buyer_account);
    return result
}
module.exports = scrapper;