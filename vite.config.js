import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    base: 'musinsa',
    plugins: [
        react(
            {
                jsxImportSource: '@emotion/react',
                babel: {
                    plugins: ['@emotion/babel-plugin']
                }
            }
        )
    ],
    resolve: {
        alias: [
            {
                find: '@', replacement: path.resolve(__dirname, 'src')
            }
        ]
    }
})
