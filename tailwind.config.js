/** Basic Tailwind CSS config */
export const darkMode = 'class';
export const content = [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './public/index.html',
    './**/*.{html,js,jsx,ts,tsx,vue}'
];
export const theme = {
    extend: {
        colors: {
            primary: '#1f2937', // slate-800
            accent: '#6366f1' // indigo-500
        },
        fontFamily: {
            GTBold: ['GTBold', 'sans-serif']
        }
    }
};
export const plugins = [];