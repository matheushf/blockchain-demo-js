/* import { Blockchain, Transaction } from './demo-coin';
let demoChain = new Blockchain();
demoChain.createTransaction(new Transaction('address 1', 'address 2', 100)); */

import { Block, Blockchain } from './blockchain'

let demoChain = new Blockchain();
demoChain.addBlock(new Block(new Date(), { 'some': 'data' }));
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
    blocks: demoChain.chain,
    text: ''
  },
  methods: {
    addBlock() {
      demoChain.addBlock(new Block(new Date(), { 'some': 'data' }));
    },

    removeLast() {
      demoChain.chain.pop();
    },

    checkData(event, index) {
      let value = event.target.value;

      if (!demoChain.chain[index + 1]) {
        demoChain.chain[index].data = value;
        return;
      }

      value = value.replace(/\s/g, '');
      let valid = demoChain.checkBlockValid(index, value);

      for (let i = index; i <= demoChain.chain.length - 1; i++) {
        demoChain.chain[i].valid = valid;
      }

    }
  }
});
