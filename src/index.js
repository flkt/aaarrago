import * as componentes from '@/componentes';

const componentesList = componentes?.default;
const Componentes = {
  install(Vue) {
    Object.keys(componentesList).forEach(name => {
      Vue.component(name, componentesList[name]);
    })
  },
};
export default Componentes;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Componentes);
}
