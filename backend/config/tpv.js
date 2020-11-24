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

const pago = {
    amount: 3500,
    currency: '978',
    order: randomTransactionId,
    merchantName: 'Arrova Academia',
    merchantCode: '351985874',
    terminal: '1',
    transactionType: TRANSACTION_TYPES.AUTHORIZATION,
    MERCANTURL: '',
    successURL: '',
    errorURL: ''
}

const form = redsys.redirectPetition(pago);