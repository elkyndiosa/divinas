<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" user-scalable=no>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="user" content="{{ Auth::user() }}">
    {{-- FAVICON --}}
    {{-- <link rel="icon" type="image/png" href="" /> --}}
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <title>divinasprepagos.com</title>

        <!--  Essential META Tags Socials -->
        <meta property="og:title" content="Divinas Prepagos">
        <meta property="og:description" content="Prepagos Medellin">
        {{-- <meta property="og:image" content="" /> --}}
        {{-- <meta property="og:url" content=""> --}}
        <meta property="og:site_name" content="DivinasPrepagos">
        <meta name="twitter:card" content="summary_large_image">
        {{-- <meta name="twitter:url" contnet=""> --}}
        <meta name="twitter:title" contnet="DivinasPrepagos">
        <meta name="twitter:description" content="Prepagos Medellin">
        <meta name="twitter:title" contnet="DivinasPrepagos">
        {{-- <meta name="twitter:image" content=" "--}}
        <meta name="twitter:image:alt" content="DivinasPrepagos">
        <meta name="twitter:site" content="@website-username">

        <link  rel="icon"   href="{{ asset('images/favicon.png') }}" type="image/png" />

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Fonts -->
    <script src="https://kit.fontawesome.com/e75ef2cea1.js" crossorigin="anonymous"></script>
    
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
    </div>
</body>
</html>
