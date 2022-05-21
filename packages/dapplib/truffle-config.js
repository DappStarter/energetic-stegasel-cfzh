require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purpose inner clinic success traffic'; 
let testAccounts = [
"0xf8265c7d3ce7bfc883e8c3c09701096ad6e69147b67375dbca0500da096f9fb1",
"0x4c326b99fd112eb354dd24a79d43ddd3ac9743a0d930f50f7e670b1fe784db54",
"0x71576777e2873f632dbec85c4570429d49bb6167618b9f4f546097636d6975f7",
"0x8dc3aed0377e57ca23ab248335f53faf9058540aeb8ea9457fb909bdd6d7b0ce",
"0xb27dd4bfa5947a7a4b98f93aa3a6c606865a9785fd714c435adf5b3d16f48a99",
"0xbdaebeca690164b8ac788bbcab10a106d857548dc553e36259bf9d16b4ec18d5",
"0xf52d2dde780fddd8296866f7202d1d5bc333bd510099063195f7f5ded49080d9",
"0xcfbd73a627a00e65a4aadd77a60683174bc990ad3898a14cfebfc9ce9eb4a358",
"0x6964e6e5d04d55b16e32e2ea60ef18c884238d8706d3ec24faaf727b45c29cb7",
"0xe916c6a3522c08c63de273767681a1ba23fd5c5c74ffb0e7ef8471b1cbbcdf35"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

