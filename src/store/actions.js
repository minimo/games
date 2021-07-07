export default {
  SET_GAME_DATA: (context, gameData) => {
    context.commit("setGameData", gameData);
  },
  SET_MENU_OPEN: (context, flag) => {
    context.commit("setMenuOpen", flag);
  },
};
