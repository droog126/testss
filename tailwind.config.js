module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // purge: [],
    darkMode: false, // or 'media' or 'class'
    mode: 'jit',
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
        
            'md': '768px',
            // => @media (min-width: 768px) { ... }
        
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
        
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        flexGrow: {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
        },
        extend: {
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover'],
        },
    },
    plugins: [],
}
