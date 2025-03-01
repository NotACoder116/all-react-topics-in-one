export const data = {
        id: 1,
        name: 'Storybook',
        isFolder: true,
        items: [
            {
                id: 2,
                name: 'main.js',
                isFolder: false
            },
            {
                id: 3,
                name: 'preview.js',
                isFolder: false
            },
            {
                id: 4,
                name: 'src',
                isFolder: true,
                items: [
                    {
                        id: 5,
                        name: 'components',
                        isFolder: true,
                        items: [
                            {
                                id: 6,
                                name: 'AddPost',
                                isFolder: true,
                                items: [
                                    {
                                        id: 7,
                                        name: 'AddPost.js',
                                        isFolder: false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: 'Autocomplete',
                        isFolder: true,
                        items: [
                            {
                                id: 9,
                                name: 'Autocomplete.js',
                                isFolder: false
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: 'CustomHook',
                        isFolder: true,
                        items: [
                            {
                                id: 11,
                                name: 'CustomHook.js',
                                isFolder: false
                            }
                        ]
                    }
                ]
        
            }
        ]
    }