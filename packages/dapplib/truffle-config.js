require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name recipe six proud grace derive slot genre'; 
let testAccounts = [
"0xfa274b882e2c425409959d60a17d71702e814b2f7515fd3a3f3308d89c802521",
"0x942a0293a0d650ee20797d6810b207547db865acd520ba921ff2ddafa84a87f7",
"0xf8bf03b17c057d55efcd7ff159b67b408650e61638774c2222d08af17efab9ef",
"0x2ee300a3da650c068fdc1657bd9f84b705353bcd2484e667a75f9d1d629f684b",
"0x6d0cb0b0f679773eae4118614b10155f18c0261687193d714c0f08a81507f96d",
"0xda83b5d4cb95678ea535dd4613c8a1daa6896e5c0d352038b22f32b94e903580",
"0x7681845c6322a67229acf5cfc19ba6aabd1d27e7e258fb2f78cd01421cf66bed",
"0x249fff68eff9ae530d532e8b09a6c5a820cac00df41d97d4271507942080831b",
"0x77528622b078ff2b28d3a56a0df8bd9509af7b06877a8ab280605c83324c2b54",
"0x7e75a0d797b3e38cc52b79e7bdbecb99059219c27ebdf38b1b41b93bbfa0fa57"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


