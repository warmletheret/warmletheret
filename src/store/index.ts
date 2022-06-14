/*
 * @Author       : YH000354
 * @Date         : 2022-03-30 18:35:27
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-03-30 18:35:27
 * @FilePath     : \myblogzh\src\store\index.ts
 */
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
