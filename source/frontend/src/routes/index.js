export const routeTitles = {
    main: 'Главная',
    competitors: 'Список участников',
}

const routes = {
    main: '/',
    competitors: '/competitors',
    signin: '/signin',
    signup: '/signup',
};

export function getRouteTitle(routes) {
    if (typeof routes === 'string') {
        routes = [routes];
    }

    if (!Array.isArray(routes)) {
        return undefined;
    }

    routes.reduce((obj, routePath, routeCode) => {
        if (!routeTitles[routeCode])
            return obj;

        obj[routeCode] = routeTitles[routeCode];
        return obj;

    }, {});
}

export default routes;