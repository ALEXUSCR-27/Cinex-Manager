import api from "./axios";

export const addMovie = async (movieData) => {
    try {
        const response = await api.post(`/agregarpeliculas`, movieData);
        return response

    }  
    catch(error) {
        console.error('Error updating user:', error);
    }
};

export const searchMovies = async (movieAttr) => {
    try {
        const response = await api.post(`/buscarpeliculas`, movieAttr);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};

export const deleteMovie = async (movieID) => {
    try {
        const response = await api.post(`/eliminarPelicula`, movieID);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};

export const modifyMovie = async (movieAttr) => {
    try {
        const response = await api.post(`/modifyMovie`, movieAttr);
        return response
    }
    catch(error) {
        console.error("ERROR => ", error)
    }
};
