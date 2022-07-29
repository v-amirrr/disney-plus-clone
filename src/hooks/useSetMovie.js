import { db } from "../config/firebase";
import { collection, onSnapshot} from "firebase/firestore";

import { useDispatch } from "react-redux";
import { setMovie } from "../redux/movie/movieAction";

const useSetMovie = () => {

    const dispatch = useDispatch();

    let recommend = [];
    let newToDisney = [];
    let original = [];
    let trending = [];

    const setMovies = () => {
        const ref = collection(db, 'movies');
        
        try {
            onSnapshot(ref, (snapshot) => {
                snapshot.docs.forEach(doc => {
                    switch (doc.data().type) {
                        case 'recommend':
                            recommend = [...recommend, { id: doc.id, ...doc.data() }];
                            break;
                        
                        case "new":
                            newToDisney = [...newToDisney, { id: doc.id, ...doc.data() }];
                            break;

                        case "original":
                            original = [...original, { id: doc.id, ...doc.data() }];
                            break;

                        case "trending":
                            trending = [...trending, { id: doc.id, ...doc.data() }];
                            break;
                    };
                    
                    dispatch(setMovie({
                        recommend: recommend,
                        newToDisney: newToDisney,
                        original: original,
                        trending: trending,
                    }));
                });
            });

        } catch (err) {
            console.log(err.message);
        }
        
    };

    return { setMovies };

};

export default useSetMovie;