const ethers = require('ethers')

function main() {
    const raw = '0x02f8f6050a8459682f028459682f028301d4c0940e9b63a28d26180dbf40e8c579af3abf98ae05c58663e05746dff3b884bda1baf6000000000000000000000000000000000000000000000000000063e05746dff3000000000000000000000000f95a7f4bff0a2513c486432f520b23c0a35fd51e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c001a038fa30ad20c0ed90a4e660dd47efc5f642e1c31ad56911a09564c1c9688045b2a020a2f9372a466b1b04871406731cd3f912ec8ffb782871bc7dda26e461b2afac'
    const tx = ethers.utils.parseTransaction(raw)
    console.log(tx)
}

main()