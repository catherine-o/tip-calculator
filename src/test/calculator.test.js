import Vue from 'vue'
import Calculator from '@//views/Calculator'

function mountComponentWithProps (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({
        propsData
    }).$mount()

    return vm.$el
}

describe('Calculator', () => {
    it('should render a Container component', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Calculator)
        }).$mount()

        const Container = vm.$el.querySelector('Container')
    })

    it('should have the correct title', () => {
        const headingData = mountComponentWithProps(Calculator, { title: 'Tip Calculator' })
        const titleData = headingData.querySelector('h1').textContent

        expect(titleData).toEqual('Tip Calculator')
    })
})