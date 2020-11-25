import {
    SANDBOX_URLS,
    PRODUCTION_URLS,
    Redsys,
    TRANSACTION_TYPES,
    randomTransactionId,
    getResponseCodeMessage
} from 'readsys-easy'

const redsys = new Redsys({
    secretkey: 'sq7HjrUOBfKmC576ILgskD5srU870gJ7',
    URL: SANDBOX_URLS,
})

export default redsys;
