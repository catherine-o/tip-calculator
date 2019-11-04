import Vue from 'vue'
import Container from '@/components/Container'

function mountComponentWithProps (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({
        propsData
    }).$mount()

    return vm.$el
}

describe('Container', () => {
    it('should render a Calculations component', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Container)
        }).$mount()
        
        const Calculations = vm.$el.querySelector('Calculations')
    })
    
    it('renders', () => {
        
    })
})

// describe('Container', () => {
//     it('should contain a form', () => {
//         expect(document.querySelector('.container').innerHTML
//             .toContain(Form)
//         )
//     })
// })