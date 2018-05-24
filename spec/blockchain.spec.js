import { jasmine } from 'jasmine';
import { Block, Blockchain } from '../src/blockchain'

describe('Blockchain Demo', () => {
  let demoChain;

  beforeEach(function () {
    demoChain = new Blockchain();
  });

  it('Deveria instanciar Blockchain', () => {
    demoChain = new Blockchain();

    // expect(demoChain).toEqual(jasmine.any(Blockchain));
    expect(demoChain instanceof Blockchain).toBe(true);
  });

  it('Deveria criar um novo Bloco', () => {
    demoChain.addBlock(new Block(new Date(), { 'some': 'data' }));

    expect(demoChain.chain.length).toBeGreaterThanOrEqual(1);
  });
});
