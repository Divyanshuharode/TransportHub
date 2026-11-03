import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const transporterStore = create(persist((set) => ({
    transporter: null,
    isAuthenticated: false,

    loginInfo: (data) => set(() => ({
        transporter: data,
        isAuthenticated: true
    })),

    logOut: () => {
        set(() => ({
            transporter: null,
            isAuthenticated: false
        }));

        transporterStore.persist.clearStorage();
    }
}), {
    name: "transporter data"
}))

export default transporterStore;