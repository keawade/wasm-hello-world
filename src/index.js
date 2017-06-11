import Counter from './wasm/counter.wasm'

const counter = new Counter({
  'env': {
    'memoryBase': 0,
    'tableBase': 0,
    'memory': new WebAssembly.Memory({ initial: 256 }),
    'table': new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
  },
});

const countText = document.createElement('div');
countText.textContent = counter.exports._count();

const incFunc = () => {
  const tempValue = counter.exports._count();
  console.log('count: ', tempValue);
  countText.textContent = tempValue;
};

const anchor = document.getElementById('anchor');

const incButton = document.createElement('button');
incButton.textContent = 'Execute';
incButton.onclick = incFunc;

anchor.appendChild(countText)
anchor.appendChild(incButton);
