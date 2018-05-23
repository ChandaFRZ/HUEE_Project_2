import Vue from 'vue'
import App from '../src/App'
import MessageList from '../src/components/MessageList'
describe('MessageList.test.js', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(MessageList) // Create a copy of the original component
    vm = new cmp({
      data: { // Replace data value with this fake data
        messages: ['Cat']
      }
    }).$mount() // Instances and mounts the component
  })

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat'])
  })
})