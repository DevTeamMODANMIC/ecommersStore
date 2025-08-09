import { defineConfig } from 'vite';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import legacy from '@vitejs/plugin-legacy';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  // Base configuration
  base: './',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    
    // Rollup options
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index-modern.html'),
        products: resolve(__dirname, 'src/pages/products.html'),
        cart: resolve(__dirname, 'src/pages/cart.html'),
        checkout: resolve(__dirname, 'src/pages/checkout.html'),
        admin: resolve(__dirname, 'src/pages/admin.html')
      },
      
      output: {
        // Code splitting configuration
        manualChunks: {
          vendor: ['intersection-observer'],
          components: [
            'src/scripts/core/component-system.js',
            'src/scripts/core/state-manager.js'
          ],
          utils: [
            'src/scripts/utils/performance.js'
          ]
        },
        
        // Asset naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          
          if (/\.css$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          
          return `assets/[name]-[hash].${ext}`;
        }
      }
    },
    
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inlining threshold
    assetsInlineLimit: 4096
  },
  
  // Development server configuration
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    
    // Proxy configuration for API calls
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
    open: true
  },
  
  // CSS configuration
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: ['default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            colormin: true,
            convertValues: true,
            discardDuplicates: true,
            discardEmpty: true,
            mergeRules: true,
            minifyFontValues: true,
            minifyParams: true,
            minifySelectors: true,
            reduceIdents: false,
            svgo: true
          }]
        })
      ]
    },
    
    // CSS modules configuration
    modules: {
      localsConvention: 'camelCase'
    },
    
    // Preprocessor options
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`
      }
    }
  },
  
  // Plugin configuration
  plugins: [
    // HTML processing
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ModernStore - Premium Shopping Experience',
          description: 'Experience the future of online shopping with ModernStore',
          keywords: 'ecommerce, modern, shopping, premium, performance'
        }
      }
    }),
    
    // Progressive Web App
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'unsplash-images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              },
              cacheKeyWillBeUsed: async ({ request }) => {
                return `${request.url}?w=400&q=80`;
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets'
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      },
      manifest: {
        name: 'ModernStore',
        short_name: 'ModernStore',
        description: 'Premium shopping experience with modern design',
        theme_color: '#0ea5e9',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'assets/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    
    // Legacy browser support
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  
  // Optimization configuration
  optimizeDeps: {
    include: ['intersection-observer'],
    exclude: []
  },
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/scripts/core'),
      '@utils': resolve(__dirname, 'src/scripts/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'assets')
    }
  },
  
  // Environment variables
  envPrefix: 'MODERNSTORE_',
  
  // Experimental features
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}` };
      } else {
        return { relative: true };
      }
    }
  }
});