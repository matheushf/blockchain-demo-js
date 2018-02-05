/* import { Blockchain, Transaction } from './demo-coin';
let demoChain = new Blockchain();
demoChain.createTransaction(new Transaction('address 1', 'address 2', 100)); */

import { Block, Blockchain } from './blockchain'

let demoChain = new Blockchain();
/* console.log('Mining block 1...');
demoChain.addBlock(new Block("20/07/2017", { amount: 4 }));

console.log('Mining block 2...');
demoChain.addBlock(new Block("20/07/2017", { amount: 8 })); */

console.log(demoChain)

/* savjeeCoin.createTransaction(new Transaction('address 2', 'address 1', 50));

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions('xaviers-address');

console.log('\nBalance of xavier is', savjeeCoin.getBalanceOfAddress('xaviers-address'));

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions('xaviers-address');

console.log('\nBalance of xavier is', savjeeCoin.getBalanceOfAddress('xaviers-address')); */


new Vue({
  el: '#app',
  data: {
    blocks: demoChain.chain
  },
  methods: {
    addBlock() {
      demoChain.addBlock(new Block(new Date(), {}));
    },

    removeLast() {
      demoChain.chain.pop();
    }
  }
});
