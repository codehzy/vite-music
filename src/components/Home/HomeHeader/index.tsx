import { defineComponent } from 'vue'

export const HomeHeader = defineComponent({
  name: 'HomeHeader',
  setup() {
    return () => {
      return <div>我是Home页面的头部</div>
    }
  },
})
