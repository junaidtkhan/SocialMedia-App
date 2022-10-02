import create from 'zustand'
import { auth } from '../../FirebaseConfig'
export const useappStore = create(
    (set) => (
        {
            loggedIn: false,
            setLoggedIn: (condition) => set((state) => ({ loggedIn: condition })),
            currentUser: null,
            setUser: (USER) => set((state) => ({ currentUser: USER })),
            uploadingPost: '',
            setPost: (data) => set((state) => ({ uploadingPost: data })),
            list: null,
            setList: (li) => set((state) => ({ list: [...li] }))
        }
    )
)
