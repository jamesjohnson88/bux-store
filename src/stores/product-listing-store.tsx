import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ProductListingState {
    isLocked: boolean,
    lockListings: () => void,
    unlockListings: () => void,
}

const useProductListingStore = create<ProductListingState>()(
    devtools(
        persist(
            (set) => ({
                isLocked: true,
                lockListings: () => set(() => ({ isLocked: true })),
                unlockListings: () => set(() => ({ isLocked: false })),
            }),
            { name: 'product-listing-storage' }
        )
    )
);

export default useProductListingStore;