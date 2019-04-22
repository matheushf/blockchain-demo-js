import { Block, Blockchain } from './blockchain'

let demoChain = new Blockchain();
demoChain.addBlock(new Block(new Date(), { 'some': 'data' }));

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
