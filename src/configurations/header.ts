interface headerelement {
    name: string,
    url: string
    child?: [{
        name: string,
        url: string
    }]
}

export const headers: headerelement[] = [{
    name: 'Home',
    url: '/home'

}, {
    name: 'Marketplace',
    url: '/marketplace'
}
]