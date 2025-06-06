const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: 'var(--color-text)',
                error: 'var(--color-error)',
                paper: 'var(--color-paper)',
                primary: 'var(--color-primary)',
                background: 'var(--background)',
                'primary-contrast': 'var(--color-primary-contrast)',
            }
        },
    },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
