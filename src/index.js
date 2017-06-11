import Counter from './wasm/counter.wasm'

const wasmHelloWorld = () => {
  const counter = new Counter({
    'env': {
      'memoryBase': 0,
      'tableBase': 0,
      'memory': new WebAssembly.Memory({ initial: 256 }),
      'table': new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
    },
  });
  console.log('count function result is: ', counter.exports._count());
}

window.onload = wasmHelloWorld;
