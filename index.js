let vue;

async function $print(template = '<h1>Add Template Parameter</h1>', props) {
  const printWrapper = document.createElement('div');
  const el = document.createElement('div');
  const body = document.body;

  printWrapper.classList.add('pre-print');
  printWrapper.appendChild(el);

  body.classList.add('print-ready');
  body.appendChild(printWrapper);

  // const imageKeys = Object.keys(images);
  // for (const key of imageKeys) {
  //   const blob = await axios({method: 'get', responseType: 'blob', url: images[key]}).then(res => {
  //     return res.data;
  //   })
  //   images[key] = URL.createObjectURL(blob);
  // }

  const PrintElem = vue.extend(template);
  new PrintElem({propsData: props}).$mount(el);

  setTimeout(() => {
    window.print();
    // Print on mobile is finishing print as soon as it start so it removes " printWrapper " before print occurs
    setTimeout(() => {
      body.removeChild(printWrapper);
      body.classList.remove('print-ready');
      return new Promise.resolve();
    }, 500);
  }, 500)
}

export default {
  install(Vue, options) {
    vue = Vue;
    Vue.prototype.$print = $print;
  }
};
