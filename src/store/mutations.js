export default {
    setGameData: (state, gameData) => {
        state.title = gameData.title;
        state.url = gameData.url;
        state.thumbnail = gameData.thumbnail;
    },
};