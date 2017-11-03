import Vue from 'vue'
import ErrorMsg from './ErrorMsg.vue'
import { mount } from 'vue-test-utils'

describe('<App />', () => {

    it('should render msg', () => {    
        const wrapper = mount(ErrorMsg)
        wrapper.setProps({ msg: 'test' })  
        expect(wrapper.html()).toContain('test')        
    })
})