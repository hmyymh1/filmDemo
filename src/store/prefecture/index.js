const state = {
    name: JSON.parse(window.localStorage.getItem("prefectureNow")) ? JSON.parse(window.localStorage.getItem("prefectureNow")).name : '東京都',
    id: JSON.parse(window.localStorage.getItem("prefectureNow")) ? JSON.parse(window.localStorage.getItem("prefectureNow")).id : '13',
};

const mutations = {
    PREFECTURE_INFO(state , payload){
        state.name = payload.name;
        state.id = payload.id;
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

