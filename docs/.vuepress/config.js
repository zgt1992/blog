module.exports = {
    title: '这里是标题',
    description: '这里是描述',
    base: '/',
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/english' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: ['/guide/']
            }
        ]
        // sidebar: {
        //     '/': [
        //         "/", //指的是根目录的md文件 也就是 README.md 里面的内容
        //     //     "apiword", 根目录创建 apiword.md文件
        //     //   "api", 根目录创建 api.md文件
        //     //   "error" 根目录创建 error.md文件
        //     ]
        // },
        // sidebarDepth: 2
    }
}