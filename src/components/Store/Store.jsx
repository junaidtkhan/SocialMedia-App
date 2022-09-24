import create from 'zustand'
import { auth } from '../../FirebaseConfig'
export const useappStore = create(
    (set) => (
        {
            loggedIn: '',
            setLoggedIn: () => set((state) => ({ loggedIn: !state.loggedIn })),
            currentUser: null,
            setUser: (USER) => set((state) => ({ currentUser: USER })),
            uploadingPost: '',
            setPost: (data) => set((state) => ({ uploadingPost: data })),
            postsList:[],
            setPostsList:(post)=>set((state)=>({postsList:[...state.postsList,post]}))
        }
    )
)
