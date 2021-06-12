export default {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movie'),
    children: [
        {
            path: 'nowPlaying',
            name: 'nowPlaying',
            component: () => import('@/components/nowPlaying'),
        },
        {
            path: 'commingSoon',
            name: 'commingSoon',
            component: () => import('@/components/commingSoon'),
        },
        {
            path: 'search',
            name: 'search',
            component: () => import('@/components/search'),
        },
        {
            path: '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}