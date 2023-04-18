'use strict'

const emails = 'afidge_0v@icloud.com ' +
    'cmahgh@gmail.com ' +
    'fghs.com.@ ' +
    'lot_09d@bloomberg.co.uk ' +
    'i_billard@ow.ly ' +
    'dgfj@.com@.bo ' +
    'rdgo@hotmail.com.bo ' +
    'firtd_05dg@fiedly.com.us ' +
    'ten@com '

console.log('Given emails: ' + emails);

const emailMatch = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/gm

console.log('Proper emails from that list are: ' + emails.match(emailMatch));