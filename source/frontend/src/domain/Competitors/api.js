//TODO: Написать функцию дл/ реквестов


export const login = async (attributes) => {
    return await request({
        route: "login",
        method: 'post',
        body: attributes,
    })
}

export const signUp = async (attributes) => {
    return await request({
        route: "signup",
        method: 'post',
        body: attributes,
    })
}

export const logout = async (attributes) => {
    return await request({
        route: "logout",
        method: 'post',
        body: attributes,
    })
}