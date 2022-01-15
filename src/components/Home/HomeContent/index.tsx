import { defineComponent } from 'vue'
import { useStore } from '@/store/index'

export const HomeContent = defineComponent({
  name: 'HomeContent',
  setup() {
    const mainStore = useStore()

    return () => {
      return (
        <div>
          我是Home页面的内容区
          <p>store中name:{mainStore.name}</p>
        </div>
      )
    }
  },
})
