const state = {
    name: JSON.parse(window.localStorage.getItem("regionNow")) ? JSON.parse(window.localStorage.getItem("regionNow")).name : '関東',
    regionID: JSON.parse(window.localStorage.getItem("regionNow")) ? JSON.parse(window.localStorage.getItem("regionNow")).id : '03',
};

const mutations = {
    REGION_INFO(state , payload){
        state.name = payload.name;
        state.regionID = payload.id;
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

