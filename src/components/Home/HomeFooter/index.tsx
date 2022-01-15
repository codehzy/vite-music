import { defineComponent } from 'vue'
import { useStore } from '@/store/index'

export const HomeFooter = defineComponent({
  name: 'HomeFooter',
  setup() {
    const mainStore = useStore()

    const updateName = () => {
      mainStore.$patch({
        name: '名称被修改了,nameLength也随之改变了',
      })
    }

    const updateActionName = () => {
      mainStore.insertPost('coderhzy')
    }

    return () => {
      return (
        <div>
          <div>我是Home页面的footer</div>
          <p>store中name 的长度：{mainStore.nameLength}</p>
          <div>
            <button onClick={updateName}>修改store中的name</button>
          </div>
          <div>
            <button onClick={updateActionName}>从Action中修改名字</button>
          </div>
        </div>
      )
    }
  },
})
