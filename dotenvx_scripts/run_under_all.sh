echo "now under .env.production"
npx dotenvx run -f .env.production -- node dotenvx_demo.js
echo ""
echo "now under .env.staging"
npx dotenvx run -f .env.staging -- node dotenvx_demo.js
echo ""
echo "now under .env.development"
npx dotenvx run -f .env.development -- node dotenvx_demo.js
echo ""
echo "now under .env"
npx dotenvx run -f .env -- node dotenvx_demo.js