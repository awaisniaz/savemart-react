interface headerelement {
    name: string,
    url: string
    child?: [{
        name: string,
        url: string
    }]
}

export const headers: headerelement[] = [{
    name: 'Clothes',
    url: '/home'

}, {
    name: 'Shoes',
    url: '/marketplace'
}, {
    name: 'Electronics',
    url: '/marketplace'
}, {
    name: 'Mobiles',
    url: '/marketplace'
}, {
    name: 'Consmatics',
    url: '/marketplace'
},
]