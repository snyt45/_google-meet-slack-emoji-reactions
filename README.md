# google-meet-slack-emoji-reactions

## Project setup
```
# コンテナ作成
docker-compose build

# コンテナ起動
docker-compose up -d

# コンテナの中でbashプロセスを立ち上げ操作
docker exec -it (docker-compose ps -q app) /bin/bash

# package.jsonに記載された依存パッケージをまとめてローカルインストールする
npm install
```

```
# 開発用にコンパイルしてホットリロードする
npm run serve

# GoogleChrome拡張機能用のファイル生成
npm run build:prepare
```
