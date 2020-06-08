import Vue from 'vue'
import Vuex from 'vuex'
import { PermissionState } from './modules/permission'

Vue.use(Vuex)
console.log(PermissionState)

export interface RootState {
  permission: PermissionState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({})
