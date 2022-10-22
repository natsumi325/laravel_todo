<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TODO APP</title>
    <link rel="shortcut icon" href="{{ asset('/favicon.svg') }}">
    @viteReactRefresh
    @vite('resources/react/src/main.tsx')
</head>

<body>
    <div id="root"></div>
</body>

</html>