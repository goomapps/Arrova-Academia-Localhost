import { SANDBOX_URLS, 
         Redsys,
         PRODUCTION_URLS, 
         TRANSACTION_TYPES,
         randomTransactionId,
         getResponseCodeMessage  } from 'redsys-easy'

const redsys = new Redsys({
    secretkey: 'sq7HjrUOBfKmC576iLgskD5srU870gj7',
    URL: SANDBOX_URLS,
})

export default redsys;