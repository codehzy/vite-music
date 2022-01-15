import { defineComponent } from 'vue'

import { HomeHeader, HomeContent, HomeFooter } from '@/components/Home'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => {
      return (
        <div>
          <HomeHeader></HomeHeader>
          <HomeContent></HomeContent>
          <HomeFooter></HomeFooter>
        </div>
      )
    }
  },
})
