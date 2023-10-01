import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UsageTokenState {
    tokens: number,
    addTokens: (amount: number) => void,
    removeTokens: (amount: number) => void,
}

const useTokenStore = create<UsageTokenState>()(
    devtools(
        persist(
            (set) => ({
                tokens: 100,
                addTokens: (amount) => set((state) => ({ 
                    tokens: state.tokens + amount })),
                removeTokens: (amount) => set((state) => ({
                    tokens: state.tokens - amount >= 0 ? state.tokens - amount : 0 })),
            }),
            { name: 'usage-token-storage' }
        )
    )
);

export default useTokenStore;