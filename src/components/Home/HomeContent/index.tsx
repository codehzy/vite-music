import { defineComponent } from 'vue'
import { useStore } from '@/store/index'

export const HomeContent = defineComponent({
  name: 'HomeContent',
  setup() {
    const mainStore = useStore()

    return () => {
      return (
        <div class="home-content-main">
          <div>我是Home页面的内容区</div>
          <div class="home-content-name-title">
            store中name:{mainStore.name}
          </div>
        </div>
      )
    }
  },
})
