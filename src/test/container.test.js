import Vue from 'vue'
import Container from '@/components/Container'

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
