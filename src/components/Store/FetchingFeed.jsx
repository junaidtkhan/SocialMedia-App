import { useappStore } from "./Store";
import { db } from '../../FirebaseConfig';

export const DataFetching = () => {
    const postsList = useappStore((state) => (state.postsList))
    const setPostsList = useappStore((state) => (state.setPostsList))

}

