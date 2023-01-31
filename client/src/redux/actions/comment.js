import axios from 'axios';
import { getGameComments, setGameComments } from '../reducers/videoGame';


export const getComments = (id) => {
	return async function (dispatch) {
		try {
			const { data } = await axios(`/videogames/comments?gameID=${id}`);
			dispatch(getGameComments(data.comments));
		} catch (error) {
			dispatch(getGameComments([]))
		}
	};
};

export const postComments = (value) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.post(`/comments`, value);
			dispatch(setGameComments(data));
		} catch (error) {
			return;
		}
	};
};

export const updateComments = (value) => {
	return async function (dispatch) {
		try {
			await axios.put(`/comments`, value.comment)
		} catch (error) {
			return;
		}
	};
};