const schedule = require('./plateform/amazon');
//const schedule = require('./orderSchedule')
//const test = require('./test');
const scrapper = async (amazon_buyer_account) => {
    schedule(amazon_buyer_account);
}
module.exports = scrapper;