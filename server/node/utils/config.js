//const { CHECKOUT_APIKEY, MERCHANT_ACCOUNT } = process.env;
//console.log(process.env);

const API_VERSION = 'v50';
const CHECKOUT_URL = `https://checkout-test.adyen.com/${API_VERSION}`;
const CHECKOUT_APIKEY='AQE1hmfxJo/OaR1Kw0m/n3Q5qf3Ve55dHZxYTFdTxWq+l3JOk8J4BA+ztqPuS4G6vYkJoj+c4MIQwV1bDb7kfNy1WIxIIkxgBw==-+g+FdHJB1s/8mcg/evWIDkJgGZRqO7hMsodFya1e7f0=-Bg2vV8qEgP65bdMd';
const MERCHANT_ACCOUNT='SupportRecruitementCOM';
module.exports = {
    CHECKOUT_APIKEY,
    CHECKOUT_URL,
    MERCHANT_ACCOUNT
};
