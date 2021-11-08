import pagarme from 'lib';

pagarme.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
pagarme.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

const chargesController = pagarme.ChargesController;

const chargeId = 'ch_8YQ1JeTLzF8zlqWy';
const request = new pagarme.CreateCancelChargeRequest();
request.code = 'cancel_total_operation';

chargesController
    .cancelCharge(chargeId, request)
    .then(charge => {
        console.log(`Canceled amount: ${charge.canceledAmount}`);
        console.log(`Charge status: ${charge.status}`);
        console.log(
            `Last transaction status: ${charge.lastTransaction.status}`
        );
        console.log(`Charge is total canceled.`);
    })
    .catch(error => {
        console.log(`Status Code: ${error.errorCode}`);
        if (error.errorResponse instanceof pagarme.ErrorException) {
            console.log(error.errorResponse.message);
            console.log(error.errorResponse.errors);
        } else {
            throw error;
        }
    });