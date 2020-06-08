import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'
import store from '@/store'

const hasPermission = (roles: string[], route: RouteConfig) => {
  console.log(231)
  
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouteConfig[], roles: string[]) => {
  const res: RouteConfig[] = []

  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  console.log(res)
  return res
}

export interface PermissionState {
  routes: RouteConfig[];
  dynamicRoutes: RouteConfig[];
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements PermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    console.log(constantRoutes)
    this.routes = constantRoutes
    this.dynamicRoutes = routes
  }

  @Action
  public GenerateRoutes(roles: string[]) {
    const accessedRoutes = constantRoutes
    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
