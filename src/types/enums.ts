export enum AppRoutes {
    DASHBOARD = '/',
    LOGIN = '/auth/login',
    LOGOUT = '/auth/login',
    ALL = '/*',
    AUTH = '/auth/*'
}

export enum Endpoints {
    LOGIN = '/login',
    LOGOUT = '/logout',
    USERNAME = '/username',
    LIST = '/list'
}

export enum StatusEnums {
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
    PENDING = 'pending',
}