import { defineComponent, Suspense } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const slots = {
      default: () => (
        <div>
          <router-view></router-view>
        </div>
      ),
      fallback: () => [<div>加载中...</div>],
    }

    return () => {
      return (
        <>
          <Suspense>{slots}</Suspense>
        </>
      )
    }
  },
})
