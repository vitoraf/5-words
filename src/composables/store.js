import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const useStore = create() (
  persist(
    (set) => ({
      words: [],
      updateWords: (newWords) => set({words: newWords}),
      
    }),
    {
      name: 'words',
      // storage: createJSONStorage(() => localStorage)
    }
  )
)
export default useStore