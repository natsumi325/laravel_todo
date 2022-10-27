# laravel_TODO

Laravel, react, typescript で作成した TODO アプリ

## 要件

### backend

- Laravel Framework 9.19
- PHP 8.0.2

### frontend

- react 18.2.0
- typescript 4.8.4
- mantine 5.6.2
- swr 1.3.0

## 環境構築

1. /todo/ディレクトリに移動、composer install

   ```bash
   cd todo
   composer install
   ```

2. .env.sample をコピーして、`.env`を作成
3. テーブル作成

   ```bash
   php artisan migrate
   ```

4. npm i → npm run dev

   ```bash
   npm i
   npm run dev
   ```

5. php artisan serve してサーバー起動

   ```bash
   php artisan serve
   ```

## 参考

Laravel で REST API を実装し React と連携した CRUD アプリ作成  
https://qiita.com/masakichi_eng/items/af50d9a3e6a975b601e6

React + TypeScript で Todo アプリの作成  
https://qiita.com/tseno/items/b7133d73966c405b7249
