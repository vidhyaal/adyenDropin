const paymentMethodsConfig = {
    shopperReference: 'Adyen Cartt',
    reference: 'Adyen Checkout',
    countryCode: 'NL',
    amount: {
        value: 10,
        currency: 'EUR'
    }
};

const paymentsDefaultConfig = {
    shopperReference: 'Adyen cart',
    reference: 'Adyen Checkout',
    countryCode: 'NL',
    channel: 'Web',
	merchantAccount:'SupportRecruitementCOM',
    returnUrl: 'http://localhost:3000/success.html',
    amount: {
        value: 10,
        currency: 'EUR'
    },
    lineItems: [
        {
            id: '1',
            description: 'Test Item 1',
            amountExcludingTax: 10,
            amountIncludingTax: 11,
            taxAmount: 1,
            taxPercentage: 1,
            quantity: 1,
            taxCategory: 'High'
        }
    ]
};

// Generic POST Helper
const httpPost = (endpoint, data) =>
    fetch(`/${endpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());

// Get all available payment methods from the local server
const getPaymentMethods = () =>
    httpPost('paymentMethods', paymentMethodsConfig)
        .then(response => {
            if (response.error) throw 'No paymentMethods available';

            return response;
        })
        .catch(console.error);

// Posts a new payment into the local server
const makePayment = (paymentMethod, config = {}) => {
    const paymentsConfig = { ...paymentsDefaultConfig, ...config };
    const paymentRequest = { ...paymentsConfig, ...paymentMethod };

   // updateRequestContainer(paymentRequest);
  // alert(paymentRequest);
    return httpPost('payments', paymentRequest)
        .then(response => {
            if (response.error) throw 'Payment initiation failed';

           // updateResponseContainer(response);
             alert(response.resultCode);
            
            return response;
        })
        .catch(console.error);
};

// Fetches an originKey from the local server
const getOriginKey = () =>
    httpPost('originKeys')
        .then(response => {
            if (response.error || !response.originKeys) throw 'No originKey available';

            return response.originKeys[Object.keys(response.originKeys)[0]];
        })
        .catch(console.error);
