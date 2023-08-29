yarn dev
npx @cloudflare/next-on-pages@1
npx wrangler pages deploy .vercel/output/static

- CloudFlare に Wrangler でデプロイしたら、nodejs_compat の設定

データベースの設定をしていく
GUI でネームスペース作成
キー追加
KVNAMESPACE BINDING

npx wrangler pages dev '/Users/tishihara/Projects/frontegg-tutorial-ja/.vercel/output/static' --compatibility-flag=nodejs_compat --port=8989
