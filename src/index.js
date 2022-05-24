import './style/printStyle.scss'
let vue;

async function print(template, props = {}) {
  const printWrapper = document.createElement('div');
  const el = document.createElement('div');
  const body = document.body;

  printWrapper.classList.add('pre-print');
  printWrapper.appendChild(el);

  body.classList.add('print-ready');
  body.appendChild(printWrapper);

  const PrintElem = vue.extend(template);
  new PrintElem({propsData: props}).$mount(el);

  setTimeout(() => {
    window.print();
    // Print on mobile is finishing print as soon as it start so it removes " printWrapper " before print occurs
    setTimeout(() => {
      body.removeChild(printWrapper);
      body.classList.remove('print-ready');
      return Promise.resolve();
    }, 500);
  }, 500)
}

const PrinterPlugin = {
  install(Vue) {
    vue = Vue;
    Vue.$print = print;
    Vue.prototype.$print = print;
  }
};

export default PrinterPlugin;
