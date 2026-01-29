const code = [
    `/* You need to adjust the font replacement in CSS files/other
style html tags first, so that the fonts work properly.

@font-face {
    font-family: Light;
    src: url("../fonts/Poppins-Light.ttf");
}

@font-face {
    font-family: Regular;
    src: url("../fonts/Poppins-Regular.ttf");
}

@font-face {
    font-family: Medium;
    src: url("../fonts/Poppins-Medium.ttf");
}

@font-face {
    font-family: Bold;
    src: url("../fonts/Poppins-Bold.ttf");
}
 */

:root {
    --bg-color: #ffffff;
    --transbg-color: #ffffff80;
    --second-bg-color: #fcfcfc;
    --third-bg-color: #fafafa;
    --fourth-bg-color: #f7f7f7;
    --fifth-bg-color: #f5f5f5;
    --text-color: #09090b;
    --transtext-color: #09090b11;
    --link-color: #5f6368;
    --translink-color: #5f636811;
    --border-color: #ebebeb;
    --red-color: #ef2323;
    --transred-color: #ef232311;
    --orange-color: #ff7200;
    --transorange-color: #ff720011;
    --green-color: #009f4d;
    --transgreen-color: #009f4d17;
    --blue-color: #0060fa;
    --transblue-color: #0060fa11;
    --border: 1px solid var(--border-color);
    --box-shadow: 0px 0px 10px rgba(36, 45, 87, 0.1);
    -webkit-box-shadow: 0 0 10px rgba(36, 45, 87, 0.1);
    -moz-box-shadow: 0 0 10px rgba(36, 45, 87, 0.1);
    --xxxx: 2.25rem;
    --xxx: 2rem;
    --xx: 1.75rem;
    --x: 1.5rem;
    --l: 1.25rem;
    --m: 1rem;
    --s: .875rem;
    --xs: .675rem;
    --xxs: .475rem;
    --radius-x: .775rem;
    --radius-l: .575rem;
    --radius-m: .375rem;
    --radius-s: .275rem;
    --ideal-distance-to-header: calc((var(--xs) * 5) + var(--xxx));
}

body.dark-mode {
    --bg-color: #202124;
    --transbg-color: #20212480;
    --second-bg-color: #232427;
    --third-bg-color: #26272a;
    --fourth-bg-color: #292a2d;
    --fifth-bg-color: #2c2d30;
    --text-color: #fff;
    --transtext-color: #ffffff13;
    --link-color: #9aa0a6;
    --translink-color: #9aa0a613;
    --border-color: #38393e;
    --border: 1px solid var(--border-color);
    --box-shadow: color-mix(in srgb, rgb(0, 0, 0) 30%, transparent) 0 1px 2px 0, color-mix(in srgb, rgb(0, 0, 0) 15%, transparent) 0 2px 6px 2px;
    
    --red-color: #ff5c5c;
    --transred-color: #ff5c5c22;

    --orange-color: #ffb84d;
    --transorange-color: #ffb84d22;

    --green-color: #4ade80;
    --transgreen-color: #4ade8022;

    --blue-color: #4da6ff;
    --transblue-color: #4da6ff22;
}

::-webkit-scrollbar {
    width: 11px;
}

::-webkit-scrollbar-track {
    background: var(--border-color);
    border-radius: 25px;
}

::-webkit-scrollbar-thumb {
    background-color: #ababb6;
    border-radius: 25px;
}

hr {
    width: 100%;
    border: none;
    border-top: var(--border);
}

* {
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-size: var(--m);
    font-family: Regular, ui-sans-serif;
    color: var(--text-color);
    background-color: var(--bg-color);
}

main {
    width: 100%;
    max-width: 1920px;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
    min-height: 100dvh;
    margin-left: auto;
    margin-right: auto;
    grid-auto-rows: max-content;
}

section {
    width: 100%;
    box-sizing: border-box;
    padding: 0 var(--m);
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--xx);
    padding-top: var(--ideal-distance-to-header);
    padding-bottom: var(--ideal-distance-to-header);
}

a {
    text-decoration: none;
    color: var(--text-color);
}

ul,
ol {
    margin-left: var(--m);
}

.box-border {
    box-sizing: border-box;
}

.border-style-default {
    border: var(--border);
}

.border-primary {
    border-color: var(--blue-color);
}

.border-warning {
    border-color: var(--orange-color);
}

.border-danger {
    border-color: var(--red-color);
}

.border-success {
    border-color: var(--green-color);
}

.radius-x {
    border-radius: var(--radius-x);
}

.radius-l {
    border-radius: var(--radius-l);
}

.radius-m {
    border-radius: var(--radius-m);
}

.radius-s {
    border-radius: var(--radius-s);
}

.p-x {
    padding: var(--x);
}

.p-l {
    padding: var(--l);
}

.p-m {
    padding: var(--m);
}

.p-s {
    padding: var(--s);
}

.pt-x {
    padding-top: var(--x);
}

.pt-l {
    padding-top: var(--l);
}

.pt-m {
    padding-top: var(--m);
}

.pt-s {
    padding-top: var(--s);
}

.pr-x {
    padding-right: var(--x);
}

.pr-l {
    padding-right: var(--l);
}

.pr-m {
    padding-right: var(--m);
}

.pr-s {
    padding-right: var(--s);
}

.pb-x {
    padding-bottom: var(--x);
}

.pb-l {
    padding-bottom: var(--l);
}

.pb-m {
    padding-bottom: var(--m);
}

.pb-s {
    padding-bottom: var(--s);
}

.pl-x {
    padding-left: var(--x);
}

.pl-l {
    padding-left: var(--l);
}

.pl-m {
    padding-left: var(--m);
}

.pl-s {
    padding-left: var(--s);
}

.padding-top-ideal-distance-to-header {
    padding-top: var(--ideal-distance-to-header) !important;
}

.m-x {
    margin: var(--x);
}

.m-l {
    margin: var(--l);
}

.m-m {
    margin: var(--m);
}

.m-s {
    margin: var(--s);
}

.mt-x {
    margin-top: var(--x);
}

.mt-l {
    margin-top: var(--l);
}

.mt-m {
    margin-top: var(--m);
}

.mt-s {
    margin-top: var(--s);
}

.mr-x {
    margin-right: var(--x);
}

.mr-l {
    margin-right: var(--l);
}

.mr-m {
    margin-right: var(--m);
}

.mr-s {
    margin-right: var(--s);
}

.mb-x {
    margin-bottom: var(--x);
}

.mb-l {
    margin-bottom: var(--l);
}

.mb-m {
    margin-bottom: var(--m);
}

.mb-s {
    margin-bottom: var(--s);
}

.ml-x {
    margin-left: var(--x);
}

.ml-l {
    margin-left: var(--l);
}

.ml-m {
    margin-left: var(--m);
}

.ml-s {
    margin-left: var(--s);
}

.margin-top-ideal-distance-to-header {
    margin-top: var(--ideal-distance-to-header) !important;
}`,
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script></script>
    <title>Docs</title>
</head>
<body>
    <header>
        <div class="header-logo">
            <svg class='header-logo-img'
                 xmlns="http://www.w3.org/2000/svg" width="39.3" height="39.3" viewBox="0 0 143 143"
                 shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero">
                <path
                        d="M72 0c13 0 24 9 32 22 7 13 11 31 11 50v13l-15 6c1-6 2-13 2-19 0-17-4-32-10-43-6-9-13-15-20-15-6 0-11 3-16 9-7 1-13 3-19 5l3-6C48 9 59 0 72 0zm34 116c-1 2-1 3-2 5-8 14-19 22-32 22s-24-8-32-22c-8-13-12-30-12-49 0-5 0-9 1-13 4-2 9-4 14-6-1 6-1 12-1 19 0 16 4 31 10 42 5 10 12 16 20 16 5 0 10-3 15-9 6-1 13-3 19-5zM0 72c0-13 9-24 22-32s31-12 50-12c4 0 9 0 13 1 2 4 4 9 6 15-6-2-13-2-19-2-17 0-32 4-43 10-9 5-15 12-15 20 0 5 3 11 9 15 1 7 3 13 4 19-1-1-3-1-5-2C9 96 0 85 0 72zm53 28c6 1 12 2 19 2 16 0 31-4 42-10 10-6 16-13 16-20 0-6-3-11-9-15-1-7-3-14-5-20 2 1 3 2 5 3 14 8 22 19 22 32s-8 24-22 32c-13 7-30 11-49 11H59c-3-5-4-10-6-15z"/>
            </svg>
            <p>iamra.css</p>
        </div>
        <p class="example-button-change-theme cursor-pointer" onclick="changeTheme()">Dark Mode</p>
        <div class='get-menu' onclick="showMenu()">
            <svg id='get-menu' viewBox="0 0 100 100">
                <path class="line line1"
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                <path class="line line2" d="M 20,50 H 80"/>
                <path class="line line3"
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
        </div>
        <div class="navigation">
            <a class="hover-progress" href="index.html">Index</a>
            <a class="hover-progress active" href="example.html">Example</a>
        </div>
    </header>
    <nav>
        <a href="index.html">Index</a>
        <a href="example.html">Example</a>
    </nav>
    <main>
    <section></section>
    <section></section>
    <aside class="sidebar-menu">
        <div class="sidebar-menu-title sidebar-menu-item" onclick="minifySidebar()">
            <svg class="sidebar-menu-button-svg">
                <use href="#click"></use>
            </svg>
            <p>Menu</p>
        </div>

        <div class="sidebar-menu-element">
            <a class="sidebar-menu-item" data-title="Abstract" href="#Abstract">
                <svg class="sidebar-menu-button-svg">
                    <use href="#click"></use>
                </svg>
                <p>Abstract</p>
            </a>
            <details>
                <summary class="sidebar-menu-item" data-title="Sub Menu">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#display"></use>
                    </svg>
                    <span>Sub Menu</span>
                </summary>
                <a class="sidebar-menu-item" data-title="Chil Menu" href="#ChilMenu">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#display-place"></use>
                    </svg>
                    <p>Chil Menu</p>
                </a>
            </details>
        </div>
    </aside>
    <footer>
        ...
    </footer>
</body>
</html>`,
    `.accordion-item{
    display: block;
    padding: var(--m);
    border: var(--border);
    border-radius: var(--radius-s);
}

.accordion-item-check {
    display: none;
}

.accordion-item-label {
    display: grid;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    font-size: var(--m);
    padding-bottom: 0;
    border-bottom: var(--border);
    border-color: transparent;
}

.accordion-item-label-subtitle {
    font-family: Light, ui-sans-serif;
    font-size: var(--s);
}

.accordion-item-check:checked + .accordion-item-label {
    padding-bottom: var(--m);
    border-color: var(--border-color);
    margin-bottom: var(--m);
}

.accordion-content {
    height: max-content;
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;
    padding-right: var(--xxs);
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-content::-webkit-scrollbar {
    width: 7px;
}

.accordion-item-check:checked + label + .accordion-content {
    max-height: 300px;
    overflow-y: auto;
}`,
    `<div class="accordion-item">
    <input type="checkbox" id="accordion-item1" class="accordion-item-check" />
    <label for="accordion-item1" class="accordion-item-label">
        <div class="flex-aic-jcb">
            <p>What is Lorem Ipsum?</p>
            <span>▼</span>
        </div>
        <div class="accordion-item-label-subtitle">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
        </div>
    </label>
    <div class="accordion-content">
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
</div>
<div class="accordion-item">
    <input type="checkbox" id="accordion-item2" class="accordion-item-check" />
    <label for="accordion-item2" class="accordion-item-label">
        <div class="flex-aic-jcb">
            <p>What is Lorem Ipsum?</p>
            <span>▼</span>
        </div>
        <div class="accordion-item-label-subtitle">Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
        </div>
    </label>
    <div class="accordion-content">
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
</div>`,
    `.bg-primary {
    background-color: var(--blue-color);
}

.bg-trans-primary {
    background-color: var(--transblue-color);
}

.bg-trans-primary-hover:hover {
    background-color: var(--blue-color);
}

.bg-danger {
    background-color: var(--red-color);
}

.bg-trans-danger {
    background-color: var(--transred-color);
}

.bg-trans-danger-hover:hover {
    background-color: var(--red-color);
}

.bg-warning {
    background-color: var(--orange-color);
}

.bg-trans-warning {
    background-color: var(--transorange-color);
}

.bg-trans-warning-hover:hover {
    background-color: var(--orange-color);
}

.bg-success {
    background-color: var(--green-color);
}

.bg-trans-success {
    background-color: var(--transgreen-color);
}

.bg-trans-success-hover:hover {
    background-color: var(--green-color);
}

.bg-gradient {
    position: fixed;
    inset: 0;
    z-index: -2;
    background-color: var(--bg-color);
    /* add var 2 gradient */
    /* .example {
      --first-gradient-color: var(--transblue-color);
      --second-gradient-color: var(--transred-color);
    } */
    /*background-image: linear-gradient(160deg, var(--first-gradient-color) 0%, var(--second-gradient-color) 100%);*/
}`,
    `<div class="bg-primary"></div>`,
    `.badge,
.badge-close {
    word-break: break-all;
    padding: var(--xs) var(--x);
    font-weight: bolder;
    border-radius: 999px;
    box-sizing: border-box;
    width: max-content;
    max-width: 75vw;
    height: max-content;
    font-size: var(--s);
}

.badge-small{
    padding: 5px var(--s);
    font-size: var(--xs);
    color: white;
}

.badge-close {
    padding-left: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--s);
    font-weight: bold;
}

.badge-button-close {
    min-width: 23px;
    min-height: 23px;
    max-width: 23px;
    max-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: var(--border);
    border-width: 1.5px;
    border-color: var(--red-color);
    border-radius: 99px;
    color: var(--red-color);
    background-color: var(--bg-color);
    font-size: var(--s);
    cursor: pointer;
}

.badge-button-close:hover {
    background-color: var(--red-color);
}

.badge-button-close svg {
    max-width: 10px;
    max-height: 10px;
    fill: var(--red-color);
}

.badge-button-close:hover svg {
    fill: var(--bg-color);
}

.badge-primary {
    background-color: var(--transblue-color);
    color: var(--blue-color);
}

.badge-danger {
    background-color: var(--transred-color);
    color: var(--red-color);
}

.badge-warning {
    background-color: var(--transorange-color);
    color: var(--orange-color);
}

.badge-success {
    background-color: var(--transgreen-color);
    color: var(--green-color);
}`,
    `<div class="badge badge-close badge-primary">
    <p>Example</p>
    <div class="badge-button-close">x</div>
</div>
<div class="badge badge-small bg-primary">
    <p>Message</p>
</div>`,
    `.bottom-sheet{
    position: fixed;
    bottom: -86dvh;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--bg-color);
    height: 85dvh;
    width: 100dvw;
    border-top: var(--border);
    border-left: var(--border);
    border-right: var(--border);
    border-top-left-radius: var(--radius-m);
    border-top-right-radius: var(--radius-m);
    overflow: hidden;
    box-sizing: border-box;
    transition: .3s ease-in;
}

.bottom-sheet.active{
    bottom: 0;
}

.bottom-sheet-header{
    min-height: 8dvh;
    font-size: var(--l);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .3s;
}

.bottom-sheet-header:hover{
    background-color: var(--transblue-color);
    color: var(--blue-color);
    fill: var(--blue-color);
    transform: scale(1.07);
}

.bottom-sheet-content{
    display: grid;
    grid-auto-rows: max-content;
    max-height: 77dvh;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding: var(--m) 0;
    margin: 0 var(--m);
    border-top: var(--border);
}`,
    `<div class="bottom-sheet">
    <div class="bottom-sheet-header" onclick="showBottomSheet()">
        🖱
    </div>
    <div class="bottom-sheet-content">
        <h1>Example</h1>

    </div>
</div>
<div class="button bg-primary" onclick="showBottomSheet()">
    Trigger
</div>`,
    `.breadcrumb {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--s) var(--xxs);
    padding: var(--xs);
    font-size: var(--s);
    background: var(--third-bg-color);
    border-radius: var(--radius-s);
    border: var(--border);
    width: max-content;
    max-width: 85vw;
    color: var(--link-color);
}

.breadcrumb-item {
    background: var(--bg-color);
    padding: 2px var(--xs);
    border-radius: var(--radius-s);
    color: var(--link-color);
    text-transform: capitalize;
    cursor: pointer;
}

.breadcrumb-item:hover,
.breadcrumb-item.active {
    color: var(--blue-color);
}`,
    `<div class="breadcrumb">
    <a class="breadcrumb-item">menu a</a>
    <a class="breadcrumb-item">menu b</a>
</div>`,
    `.button {
    cursor: pointer;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: var(--bg-color);
    padding: calc(var(--m) / 2) var(--m);
    height: max-content;
    min-width: 77px;
    width: max-content;
    border-radius: var(--radius-s);
    font-family: Medium, ui-sans-serif;
    font-size: var(--s);
}

/* kalo butuh */
.button-clear-style {
    cursor: pointer;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
}

.button[class*=btn] {
    border: var(--border);
    border-width: 1.4px;
}

.button:hover {
    outline-style: solid;
    outline-width: 5px;
}

.button[class*=badge] {
    outline: none;
    scale: unset;
}

.dark-mode .button[class*=bg] {
    color: whitesmoke;
}

.button:hover[class*=badge] {
    color: var(--bg-color);
}

.button.btn-primary {
    color: var(--blue-color);
}

.button:hover.btn-primary {
    border-color: var(--blue-color);
}

.button:hover.bg-primary,
.button:hover.btn-primary {
    outline-color: var(--transblue-color);
}

.button:hover.badge-primary {
    background-color: var(--blue-color);
}

.button.btn-danger {
    color: var(--red-color);
}

.button:hover.btn-danger {
    border-color: var(--red-color);
}

.button:hover.bg-danger,
.button:hover.btn-danger {
    outline-color: var(--transred-color);
}

.button:hover.badge-danger {
    background-color: var(--red-color);
}

.button.btn-warning {
    color: var(--orange-color);
}

.button:hover.btn-warning {
    border-color: var(--orange-color);
}

.button:hover.bg-warning,
.button:hover.btn-warning {
    outline-color: var(--transorange-color);
}

.button:hover.badge-warning {
    background-color: var(--orange-color);
}

.button.btn-success {
    color: var(--green-color);
}

.button:hover.btn-success {
    border-color: var(--green-color);
}

.button:hover.bg-success,
.button:hover.btn-success {
    outline-color: var(--transgreen-color);
}

.button:hover.badge-success {
    background-color: var(--green-color);
}

.hover-progress {
    position: relative;
    cursor: pointer;
}

.hover-progress::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 50%;
    border-radius: 4px;
    background-color: var(--blue-color);
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    transform: translateX(-50%);
}

.hover-progress:hover::before {
    width: 100%;
}

.hover-progress.active::before {
    width: 100%;
}`,
    `<div class="button btn-primary">Example</div>

<a class="button badge-primary text-primary">Example</a>

<button class="button bg-primary">Example</button>

<a class="button badge-primary text-primary rounded">Example</a>`,
    `.card-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    gap: var(--x) var(--l);
    box-sizing: border-box;
}

.card-wrapper {
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
    padding: var(--l);
    border-radius: var(--radius-m);
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--m);
}

.card-wrapper.replace-shadow-with-border {
    box-shadow: unset;
    border: var(--border);
}

.card-wrapper-title {
    font-family: Medium, ui-sans-serif;
    font-size: var(--l);
}

.card-wrapper-date-time {
    font-size: var(--xs);
    font-style: italic;
    font-weight: 100;
    color: var(--link-color);
}

.card-wrapper-actions {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: var(--m);
    width: 100%;
    font-size: var(--s);
    flex-wrap: wrap;
    margin-top: var(--xx);
}

.card-wrapper-actions * {
    cursor: pointer;
}

.card-wrapper-actions :hover {
    text-decoration: underline;
}`,
    `<div class="card-layout">
    <div class="card-wrapper">
        <div>
            <div class="card-wrapper-title">Ilham Rahmat Akbar</div>
            <p>Fullstack Dev</p>
            <small>Jakarta</small>
        </div>
        <div class="card-wrapper-actions">
            <a class="text-primary">Hire</a>
            <a class="text-success">Contact</a>
        </div>
        <p class="card-wrapper-date-time">5 min ago</p>
    </div>
    <div class="card-wrapper replace-shadow-with-border">
        <div>
            <div class="card-wrapper-title">Ilham Rahmat Akbar</div>
            <p>Fullstack Dev</p>
            <small>Jakarta</small>
        </div>
        <div class="card-wrapper-actions">
            <a class="text-primary">Hire</a>
            <a class="text-success">Contact</a>
        </div>
        <p class="card-wrapper-date-time">5 min ago</p>
    </div>
</div>`,
    `.data-box {
    display: grid;
    gap: var(--m);
    padding-left: var(--xx);
    border-left: 5px solid var(--blue-color);
    border-radius: var(--m);
}

.data-box h1,
.data-box h2,
.data-box h3 {
    text-transform: capitalize;
    font-family: Medium, ui-sans-serif;
}

.data-content {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: var(--m) var(--xxxx);
}

.data-key {
    font-family: Medium, ui-sans-serif;
    text-transform: capitalize;
}

.data-value {

}`,
    `<div class="data-box">
    <h3>Data</h3>
    <div class="data-content">
        <div class="data-key">Name</div>
        <div class="data-value">: Ilham Rahmat Akbar</div>
        <div class="data-key">Position</div>
        <div class="data-value">: Fullstack</div>
        <div class="data-key">Rate</div>
        <div class="data-value">: A</div>
    </div>
</div>`,
    `.gap-x {
    gap: var(--x);
}

.gap-l {
    gap: var(--l);
}

.gap-m {
    gap: var(--m);
}

.gap-s {
    gap: var(--s);
}

.column-gap-x {
    column-gap: var(--x);
}

.column-gap-l {
    column-gap: var(--l);
}

.column-gap-m {
    column-gap: var(--m);
}

.column-gap-s {
    column-gap: var(--s);
}

.row-gap-x {
    row-gap: var(--x);
}

.row-gap-l {
    row-gap: var(--l);
}

.row-gap-m {
    row-gap: var(--m);
}

.row-gap-s {
    row-gap: var(--s);
}`,
    `<div class="grid-custom gap-l"></div>
<div class="flex-aic-jca gap-l"></div>`,
    `.h-max-content {
    height: max-content;
}

.h-full {
    height: 100%;
}

.h-full-dvh {
    min-height: 100dvh;
}`,
    `<div class="h-full-dvh"></div>`,
    `.svg-x {
    max-width: var(--x);
    max-height: var(--x);
}

.svg-l {
    max-width: var(--l);
    max-height: var(--l);
}

.svg-m {
    max-width: var(--m);
    max-height: var(--m);
}

.svg-s {
    max-width: var(--s);
    max-height: var(--s);
}

.svg-fill-text:hover,
.fill-text {
    fill: var(--text-color);
}

.svg-fill-blue:hover,
.fill-blue {
    fill: var(--blue-color);
}

.svg-fill-red:hover,
.fill-red {
    fill: var(--red-color);
}

.svg-fill-orange:hover,
.fill-orange {
    fill: var(--orange-color);
}

.svg-fill-green:hover,
.fill-green {
    fill: var(--green-color);
}`,
    `<svg class="svg-l"></svg>`,
    `.swiper {
    width: 70vw;
}`,
    `/* swiper owl carousel */
<div class="swiper"></div>`,
    `.w-full {
    width: 100%;
}

.w-full-dvw {
    width: 100dvw;
}

.w-max-content {
    width: max-content;
}

.max-width-1000 {
    max-width: 1000px;
    width: 100%;
}

.max-width-900 {
    max-width: 900px;
    width: 100%;
}

.max-width-800 {
    max-width: 800px;
    width: 100%;
}

.max-width-700 {
    max-width: 700px;
    width: 100%;
}

.max-width-600 {
    max-width: 600px;
    width: 100%;
}

.max-width-500 {
    max-width: 500px;
    width: 100%;
}

.max-width-400 {
    max-width: 400px;
    width: 100%;
}

.max-width-300 {
    max-width: 300px;
    width: 100%;
}`,
    `<div class="w-full-dvw"></div>`,
    `.pc-center {
    place-content: center;
}

.ps-center {
    place-self: center;
}

.ps-start {
    place-self: start;
}`,
    `<div class="ps-start"></div>`,
    `.grid-start {
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--l);
}

.grid-custom {
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--l);
    place-items: center;
}`,
    `<div class="grid-custom"></div>`,
    `.flex-ais-jcs {
    display: flex;
    flex-wrap: wrap;
}

.flex-ais-jcc {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.flex-aic-jcc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.flex-aic-jce {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
}

.flex-aic-jcb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.flex-aic-jca {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.flex-aic-jcs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.flex-nowrap {
    flex-wrap: nowrap;
}`,
    `<div class="flex-aic-jca"></div>`,
    `.font-bold {
    font-family: Bold, ui-sans-serif;
}

.font-medium {
    font-family: Medium, ui-sans-serif;
}

.font-regular {
    font-family: Regular, ui-sans-serif;
}

.font-light {
    font-family: Light, ui-sans-serif;
}

.font-size-4x {
    font-size: var(--xxxx);
}

.font-size-3x {
    font-size: var(--xxx);
}

.font-size-2x {
    font-size: var(--xx);
}

.font-size-x {
    font-size: var(--x);
}

.font-size-l {
    font-size: var(--l);
}

.font-size-m {
    font-size: var(--m);
}

.font-size-s {
    font-size: var(--s);
}

.font-size-xs {
    font-size: var(--xs);
}

.font-size-2xs {
    font-size: var(--xxs);
}`,
    `<div class="font-medium"></div>`,
    `fieldset {
    outline: none;
    border: 2px solid var(--text-color);
    border-radius: var(--radius-m);
    box-sizing: border-box;
    width: 100%;
    max-width: 325px;
    height: max-content;
    padding: 0 var(--xxs) 3px var(--xxs);
}

legend {
    margin-left: var(--xxs);
    padding: 0 var(--xxs);
    font-size: var(--s);
    font-family: Medium, ui-sans-serif;
    color: var(--text-color);
}

fieldset input {
    border: none;
    border-radius: var(--radius-m);
    outline: none;
    padding: 1px 0 0 0;
    font-size: var(--m);
}

label {
    text-transform: capitalize;
    font-family: Medium, ui-sans-serif;
}

input,
select,
textarea {
    font-size: var(--m);
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    width: 100%;
    max-width: 500px;
    cursor: pointer;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: var(--border);
    padding: var(--s);
    outline: none;
    box-sizing: border-box;
    height: max-content;
    border-radius: var(--radius-s);
}

textarea {
    height: 177px;
}

.resize-none {
    resize: none;
}

/*.dark-mode input,*/
/*.dark-mode textarea,*/
/*.dark-mode input:disabled,*/
/*.dark-mode input::-webkit-file-upload-button {*/
/*    background-color: var(--third-bg-color) !important;*/
/*}*/

input::-webkit-file-upload-button {
    cursor: pointer;
    border: 1px solid var(--blue-color);
    outline: none;
    color: var(--blue-color);
    background-color: var(--bg-color);
    padding: 7px var(--xs);
    min-width: 63px;
    border-radius: var(--radius-s);
    transition: .2s;
    font-family: Medium, ui-sans-serif;
    font-size: var(--s);
}

input::-webkit-file-upload-button:hover {
    color: var(--bg-color);
    background-color: var(--blue-color);
}

input[type='date'] {
    cursor: auto;
}

input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
}

.dark-mode input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

input:disabled {
    background-color: var(--bg-color) !important;
    color: var(--text-color);
}

input::placeholder {
    color: var(--link-color);
    font-style: italic;
}

input.input-clear-style,
select.select-clear-style,
textarea.textarea-clear-style {
    max-width: unset;
    border: unset;
    padding: unset;
    border-radius: unset;
}

.form-like-google {
    position: relative;
}

.form-like-google-label {
    position: absolute;
    left: var(--m);
    top: 50%;
    transform: translateY(-50%);
    color: var(--link-color);
    pointer-events: none;
    transition: all 0.2s ease;
}

.form-like-google-input{
    border-width: 2px;
}

.form-like-google-input:focus,
.form-like-google-input:not(:placeholder-shown) {
    border-color: var(--blue-color);
}

.form-like-google-input:focus + .form-like-google-label,
.form-like-google-input:not(:placeholder-shown) + .form-like-google-label {
    top: 0;
    font-size: var(--s);
    background-color: var(--bg-color);
    color: var(--blue-color);
    padding: 0 4px;
}
`,
    `<h3>Example</h3>
<div>
    <form class="card-wrapper replace-shadow-with-border">
        <h3 class="text-center">Login</h3>
        <fieldset class="ps-center">
            <legend>Username</legend>
            <input type="text"/>
            <p class="text-error-msg">Error</p>
        </fieldset>
        <fieldset class="ps-center">
            <legend>Password</legend>
            <input type="password"/>
            <p class="text-error-msg">Error</p>
        </fieldset>
        <button type="submit" class="button bg-primary ps-center">Submit</button>
    </form>

    <br/>
    <form class="card-wrapper replace-shadow-with-border">
        <h3 class="text-center">Register</h3>
        <div class="max-width-500">
            <label for="username">username</label>
            <input name="username" type="text" placeholder="input" id="username"/>
            <p class="text-error-msg">Error</p>
        </div>
        <div class="max-width-500">
            <label for="option">option</label>
            <select name="option" id="option">
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
            </select>
            <p class="text-error-msg">Error</p>
        </div>
        <div class="max-width-500">
            <label for="desc">desc</label>
            <textarea name="desc" id="desc"></textarea>
            <p class="text-error-msg">Error</p>
        </div>
        <div class="max-width-500">
            <label for="files">resume</label>
            <input name="files" type="file" id="files"/>
            <p class="text-error-msg">Error</p>
        </div>
        <div class="max-width-500">
            <label for="dob">date of birth</label>
            <input name="dob" type="date" id="dob"/>
            <p class="text-error-msg">Error</p>
        </div>
        <button type="submit" class="button bg-primary ps-center">Submit</button>
                    </form>
                    <br/>
                    <form class="card-wrapper replace-shadow-with-border">
        <h3 class="text-center">Login like google</h3>
        <div class="max-width-500">
            <div class="form-like-google">
                <input class="form-like-google-input" name="email" type="email" placeholder=" "
                       id="email"/>
                <label class="form-like-google-label" for="email">Email</label>
            </div>
            <p class="text-error-msg">Error</p>
        </div>
        <div class="max-width-500">
            <div class="form-like-google">
                <input class="form-like-google-input" name="password" type="password" placeholder=" "
                       id="password"/>
                <label class="form-like-google-label" for="password">Password</label>
            </div>
            <p class="text-error-msg">Error</p>
        </div>
        <button type="submit" class="button bg-primary ps-center">Submit</button>
    </form>
</div>`,
    `.get-menu {
    display: none;
}

.get-menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}

.get-menu svg {
    width: 31px;
    height: 31px;
}

.get-menu .line {
    fill: none;
    stroke: var(--text-color);
    stroke-width: 8;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.get-menu .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 8;
}

.get-menu .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 8;
}

.get-menu .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 8;
}

.get-menu .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 8;
}

.get-menu .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 8;
}

.get-menu .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 8;
}`,
    `<div className='get-menu' onClick={toggleMenu} ref={specificAreaRef}>
    <svg className={active ? 'opened' : ''} viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
    </svg>
</div>`,
    `header,
footer {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}

header {
    height: calc(var(--xs) * 5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: var(--transbg-color);
    backdrop-filter: blur(5px);
    padding: 5px var(--m);
    align-items: center;
}

.header-logo {
    display: flex;
    align-items: center;
    gap: var(--m);
    padding: var(--xxs) 0;
    transition: .3s;
}

.header-logo-img {
    width: 17px;
    height: 17px;
    fill: var(--text-color);
}

nav {
    display: flex;
    align-items: center;
    gap: var(--m);
    font-family: Medium, serif;
}

nav a {
    cursor: pointer;
    color: var(--link-color);
}

nav a.active {
    color: var(--text-color);
}

footer {
    flex-wrap: wrap;
    gap: var(--xxxx);
    color: var(--link-color);
    font-size: var(--s);
    border-top: var(--border);
    padding: 10dvh var(--m) 20dvh var(--m);
}`,
    `<header>
    <div class="header-logo">
        <svg class='header-logo-img'
             xmlns="http://www.w3.org/2000/svg" width="39.3" height="39.3" viewBox="0 0 143 143"
             shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero">
            <path
                    d="M72 0c13 0 24 9 32 22 7 13 11 31 11 50v13l-15 6c1-6 2-13 2-19 0-17-4-32-10-43-6-9-13-15-20-15-6 0-11 3-16 9-7 1-13 3-19 5l3-6C48 9 59 0 72 0zm34 116c-1 2-1 3-2 5-8 14-19 22-32 22s-24-8-32-22c-8-13-12-30-12-49 0-5 0-9 1-13 4-2 9-4 14-6-1 6-1 12-1 19 0 16 4 31 10 42 5 10 12 16 20 16 5 0 10-3 15-9 6-1 13-3 19-5zM0 72c0-13 9-24 22-32s31-12 50-12c4 0 9 0 13 1 2 4 4 9 6 15-6-2-13-2-19-2-17 0-32 4-43 10-9 5-15 12-15 20 0 5 3 11 9 15 1 7 3 13 4 19-1-1-3-1-5-2C9 96 0 85 0 72zm53 28c6 1 12 2 19 2 16 0 31-4 42-10 10-6 16-13 16-20 0-6-3-11-9-15-1-7-3-14-5-20 2 1 3 2 5 3 14 8 22 19 22 32s-8 24-22 32c-13 7-30 11-49 11H59c-3-5-4-10-6-15z"/>
        </svg>
        <p>iamra.css</p>
    </div>
    <div class='get-menu'>
        <svg class="opened" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
    </div>
    <nav>
        <a class="hover-progress">Menu 1</a>
        <a class="hover-progress">Menu 2</a>
        <a class="hover-progress">Menu 3</a>
    </nav>
</header>

<main>content</main>

<footer>
    Copy
</footer>
`,
    `.picture-default {
    width: 111px;
    height: 111px;
    border-radius: var(--radius-s);
    object-fit: cover;
    background-color: whitesmoke;
    border: var(--border);
}

.rounded {
    border-radius: 9999px;
}

.object-fit-cover {
    object-fit: cover;
}`,
    `<div class="picture-default rounded"></div>`,
    `.loading-spinner {
    border: 4px solid transparent;
    border-top: 4px solid var(--text-color);
    border-radius: 50%;
    background-color: transparent;
    width: var(--x);
    height: var(--x);
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading-bar {
    height: var(--s);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 99px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.loading-bar-progress {
    height: 100%;
    background: #0060fa;
    width: 0;
    border-radius: 99px;
}

.loading-bar-progress.with-animation-progress {
    animation: fillProgress 11s ease-out forwards;
}

@keyframes fillProgress {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}

.loading-pulse {
    background: linear-gradient(90deg, var(--border-color), var(--translink-color) 50%, var(--border-color) 75%);
    background-size: 200% 100%;
    animation: skeleton-loading 2s infinite;
}

@keyframes skeleton-loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
`,
    `<div class="loading-spinner"></div>
<div class="loading-bar max-width-400">
    <div class="loading-bar-progress with-animation-progress"></div>
</div>
<div class="loading-pulse" style="width: 111px; height: 111px; border-radius: 12px"></div>
`,
    `.modal {
    position: fixed;
    inset: 0;
    display: flex;
    background: var(--transtext-color);
    z-index: 99;
}

.modal.hide{
    display: none;
}

.dark-mode .modal {
    background-color: var(--transbg-color);
}

.modal-box {
    margin: auto;
    width: 75vw;
    max-height: 90dvh;
    background-color: var(--bg-color);
    box-sizing: border-box;
    border-radius: var(--radius-m);
    padding: var(--xxx);
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    gap: var(--m);
}

.dark-mode .modal-box {
    background-color: var(--third-bg-color);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--l);
    margin-bottom: var(--m);
    border-bottom: var(--border);
    font-size: var(--l);
    font-family: Medium, ui-sans-serif;
    font-weight: bold;
}

.modal-content {
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--x);
    place-items: start center;
    overflow: auto;
    position: relative;
    padding: var(--x);
    box-sizing: border-box;
}

.modal-footer {
    padding-top: var(--l);
    margin-top: var(--m);
    border-top: var(--border);
    text-align: center;
    font-size: var(--s);
    color: var(--link-color);
}`,
    `<div class="modal hide">
    <div class="modal-box">
        <div class="modal-header">
            <p>Title</p>
            <div class="badge-button-close" onclick="showModal()">x</div>
        </div>
        <div class="modal-content">...</div>
        <div class="modal-footer">...</div>
    </div>
</div>`,
    `.pagination {
    display: flex;
    width: max-content;
    justify-content: center;
    gap: var(--m);
    align-items: center;
    font-family: Medium, ui-sans-serif;
    margin-top: var(--x);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: var(--m) var(--xxxx);
    max-width: 77dvw;
    overflow: auto;
    border-radius: 999px;
}

.dark-mode .pagination{
    box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
}

.pagination-item {
    width: var(--xx);
    height: var(--xx);
    border: var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--s);
    border-radius: var(--radius-s);
}

.pagination-item:hover,
.pagination-item.active {
    background-color: var(--blue-color);
    color: white;
}`,
    `<div class="pagination">
    <div class="pagination-item"><</div>
    <div class="pagination-item">1</div>
    <div class="pagination-item">2</div>
    <div class="pagination-item">3</div>
    <div class="pagination-item">></div>
</div>`,
    `.sidebar-menu {
    width: 325px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: var(--ideal-distance-to-header);
    padding: 0 var(--m) var(--m) var(--m);
    transition: .5s;
}

main.has-sidebar.active .sidebar-menu {
    width: 117px;
}

.sidebar-menu-content{
    padding: var(--m);
    background-color: var(--third-bg-color);
    border-radius: var(--radius-m);
    display: grid;
    grid-auto-rows: max-content 1fr;
    max-height: 70dvh;
}

main.has-sidebar.active .sidebar-menu p,
main.has-sidebar.active .sidebar-menu span {
    display: none;
}

.sidebar-menu-title {
    font-family: Medium, ui-sans-serif;
    font-size: var(--s);
}

.sidebar-menu-element {
    display: grid;
    text-transform: capitalize;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: var(--xxxx);
    padding-right: var(--xs);
}

.sidebar-menu-accordion {
    margin-bottom: var(--xxs);
    border-radius: var(--radius-m);
    box-sizing: border-box;
}

.sidebar-menu-accordion[open] {
    background-color: var(--border-color);
}

.sidebar-menu-element summary {
    margin-bottom: 0;
}

.sidebar-menu-accordion-elements{
    padding: var(--xxs);
    box-sizing: border-box;
}

.sidebar-menu-element::-webkit-scrollbar {
    width: 7px;
}

.sidebar-menu-item {
    display: flex;
    column-gap: var(--m);
    row-gap: var(--xxs);
    padding: var(--m) var(--xs);
    fill: var(--link-color);
    color: var(--link-color);
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: var(--bg-color);
    border: var(--border);
    border-color: transparent;
    margin-bottom: var(--xxs);
    border-radius: var(--radius-m);
}

.sidebar-menu .sidebar-menu-item[data-title]::after {
    content: attr(data-title);
    visibility: hidden;
    opacity: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    border-radius: var(--radius-l);
    padding: var(--x) var(--xxx);
    position: fixed;
    z-index: 999;
    white-space: nowrap;
    font-size: var(--xx);
    left: 50%;
    top: 20dvh;
    transform: translateX(-50%);
    transition: opacity 0.3s, visibility 0.3s;
    box-shadow: var(--box-shadow);
    border: var(--border);
    font-family: Medium, ui-sans-serif;
}

main.has-sidebar.active .sidebar-menu-item[data-title]:hover::after {
    visibility: visible;
    opacity: 1;
}

.sidebar-menu-button-svg {
    max-width: var(--s);
    max-height: var(--s);
    fill: var(--text-color);
}

.sidebar-menu-item:hover,
.sidebar-menu-item.active {
    border-color: var(--border-color);
    color: var(--blue-color);
}

.sidebar-menu-item:hover .sidebar-menu-button-svg,
.sidebar-menu-item.active .sidebar-menu-button-svg {
    fill: var(--blue-color);
}

main.has-sidebar section {
    transition: .5s;
    padding-left: calc(325px + var(--m));
}

main.has-sidebar.active section {
    padding-left: calc(117px + var(--m));
}

main.has-sidebar.active .sidebar-menu-item {
    justify-content: center;
}`,
    `<aside class="sidebar-menu">
    <div class="sidebar-menu-content">
        <div class="sidebar-menu-title sidebar-menu-item" onclick="minifySidebar()">
            <svg class="sidebar-menu-button-svg">
                <use href="#click"></use>
            </svg>
            <p>Menu</p>
        </div>
        <div class="sidebar-menu-element">
            <a class="sidebar-menu-item" data-title="Data" href="#Data">
                <svg class="svg-s sidebar-menu-button-svg">
                    <use href="/sprite.svg#click"></use>
                </svg>
                <p>Data</p>
            </a>
        <details class="sidebar-menu-accordion">
            <summary class="sidebar-menu-item" data-title="Dimen">
                <svg class="sidebar-menu-button-svg">
                    <use href="#dimen"></use>
                </svg>
                <span>Dimen</span>
            </summary>
            <div class="sidebar-menu-accordion-elements">
                <a class="sidebar-menu-item" data-title="Gap" href="#Gap">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#dimen-gap"></use>
                    </svg>
                    <p>Gap</p>
                </a>
                <a class="sidebar-menu-item" data-title="Height" href="#Height">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#dimen-height"></use>
                    </svg>
                    <p>Height</p>
                </a>
                <a class="sidebar-menu-item" data-title="Svg" href="#Svg">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#dimen-svg"></use>
                    </svg>
                    <p>Svg</p>
                </a>
                <a class="sidebar-menu-item" data-title="Swiper" href="#Swiper">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#dimen-swiper"></use>
                    </svg>
                    <p>Swiper</p>
                </a>
                <a class="sidebar-menu-item" data-title="Width" href="#Width">
                    <svg class="sidebar-menu-button-svg">
                        <use href="#dimen-width"></use>
                    </svg>
                    <p>Width</p>
                </a>
            </div>
        </details>
    </div>
</aside>
<section>
...
</section>
`,
    `.stepper {
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: var(--m);
    overflow-x: auto;
    padding-bottom: var(--xxs);
}

.stepper::-webkit-scrollbar {
    height: 7px;
}

.stepper-item {
    display: flex;
    align-items: center;
    column-gap: var(--xxs);
}

.stepper-key {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--link-color);
    font-size: var(--s);
    font-family: Medium, ui-sans-serif;
    cursor: pointer;
}

.stepper-key.active,
.stepper-key:hover{
    background-color: var(--blue-color);
    color: white;
}

.stepper-value {
    white-space: nowrap;
    font-family: Medium, ui-sans-serif;
}

.stepper-divider {
    height: 1px;
    min-width: 111px;
    background-color: var(--blue-color);
}`,
    `<div class="stepper">
    <div class="stepper-item">
        <div class="stepper-key active">1</div>
        <div class="stepper-value">Resume</div>
    </div>
    <div class="stepper-divider"></div>
    <div class="stepper-item">
        <div class="stepper-key">2</div>
        <div class="stepper-value">Email</div>
    </div>
    <div class="stepper-divider"></div>
    <div class="stepper-item">
        <div class="stepper-key">3</div>
        <div class="stepper-value">Salary</div>
    </div>
</div>`,
    `.table-box {
    overflow: auto;
    font-size: var(--s);
}

table {
    width: 100%;
    white-space: nowrap;
    border-collapse: separate;
    border-spacing: 0;
}

th {
    background-color: var(--third-bg-color);
    border-top: var(--border);
    border-bottom: var(--border);
}

th:first-child,
td:first-child {
    border-left: var(--border);
    border-top-left-radius: var(--radius-m);
    border-bottom-left-radius: var(--radius-m);
}

th:last-child,
td:last-child {
    border-right: var(--border);
    border-top-right-radius: var(--radius-m);
    border-bottom-right-radius: var(--radius-m);
}

th,
td {
    padding: var(--s);
    vertical-align: middle;
}

tbody tr:hover {
    background-color: var(--second-bg-color);
}

tr:nth-child(even) {
    background-color: var(--third-bg-color);
}

td {
    border: none !important;
}

td:first-child {
    text-align: center;
}

td:hover {
    background-color: var(--fifth-bg-color);
}

td.fit {
    hyphens: auto;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    min-width: 175px;
}

td.action {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--s);
}

td.action form {
    display: inline-block;
}

td.action a,
td.action button,
td.action div {
    font-size: var(--s);
}

td.action a,
td.action div {
    cursor: pointer;
}

td.action :hover {
    text-decoration: underline;
}`,
    `<div class="table-box">
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td class="fit">Example</td>
                <td class="action">
                    <a class="text-primary">save</a>
                    <div class="text-success">edit</div>
                    <form><button class="button-clear-style text-warning">delete</button></form>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    `.section-title {
    font-size: var(--x);
    text-align: center;
    font-family: Medium, ui-sans-serif;
}

.section-title-with-marker::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--xxs) / 2 + 2px);
    height: var(--xx);
    background-color: var(--blue-color);
    border-radius: 90px;
}

.section-title-with-marker {
    font-size: var(--x);
    position: relative;
    font-family: Medium, ui-sans-serif;
    color: var(--blue-color);
    padding-left: var(--s);
    width: max-content;
    max-width: 85dvw;
    height: max-content;
    box-sizing: border-box;
    hyphens: auto;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
}

.text-break {
    word-break: break-all;
    word-wrap: break-word;
}

.text-center {
    text-align: center;
}

.text-primary {
    color: var(--blue-color);
}

.text-danger {
    color: var(--red-color);
}

.text-warning {
    color: var(--orange-color);
}

.text-success {
    color: var(--green-color);
}

.text-primary-hover:hover {
    color: var(--blue-color);
}

.text-danger-hover:hover {
    color: var(--red-color);
}

.text-warning-hover:hover {
    color: var(--orange-color);
}

.text-success-hover:hover {
    color: var(--green-color);
}

.text-link {
    color: var(--link-color);
}

.text-white {
    color: white;
}

.text-hover-underline:hover {
    text-decoration: underline;
}

.text-gold {
    color: #BF9B30;
    background: -webkit-linear-gradient(right, #BF9B30, #A67C00, #FFCF40, #FFDC73, #FFBF00, #FFDC73, #FFCF40, #A67C00, #BF9B30);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-error-msg {
    font-family: Light, ui-sans-serif;
    font-size: var(--s);
    font-weight: bold;
    color: var(--red-color);
    margin-top: 2px;
}

.underline {
    text-decoration: underline;
}

.capitalize {
    text-transform: capitalize;
}

.cursor-pointer {
    cursor: pointer;
}`,
    `<p class="text-primary">Success</p>`,
    `.toast {
    position: fixed;
    right: var(--m);
    bottom: 100px;
    z-index: 99;
    width: max-content;
    color: white;
}

.toast > div {
    word-break: break-all;
    padding: var(--s) var(--l);
    border: var(--border);
    border-radius: var(--radius-m);
    display: flex;
    align-items: center;
    gap: var(--m);
    max-width: 75vw;
    height: max-content;
    box-sizing: border-box;
}

.toast-button-close {
    min-width: 23px;
    min-height: 23px;
    max-width: 23px;
    max-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: var(--border);
    border-width: 1.5px;
    border-color: var(--red-color);
    border-radius: 99px;
    color: var(--red-color);
    background-color: var(--bg-color);
    font-size: var(--s);
    cursor: pointer;
    border: var(--border);
    border-color: transparent;
}

.toast-button-close:hover {
    background-color: var(--red-color);
    border-color: white;
}

.toast-button-close svg {
    max-width: 10px;
    max-height: 10px;
    fill: var(--red-color);
}

.toast-button-close:hover svg {
    fill: var(--bg-color);
}`,
    `<div className={'toast'}>
    <div className={'bg-' + props.type}>
        <p>{props.msg}</p>
        <div className={'toast-button-close'} onClick={props.handleOnClose}>
            <SvgComp file={'common'} icon={'close'}/>
        </div>
    </div>
</div>`,
    `.timeline {
    display: grid;
    grid-auto-rows: max-content;
    grid-template-columns: 1fr;
}

.timeline-item {
    margin-top: var(--m);
    display: flex;
    align-items: start;
    column-gap: var(--xs);
}

.timeline-key {
    min-width: 41px;
    min-height: 41px;
    max-width: 41px;
    max-height: 41px;
    background-color: var(--link-color);
    font-family: Medium, ui-sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 41px;
    cursor: pointer;
}

.timeline-key.active,
.timeline-key:hover{
    background-color: var(--blue-color);
    color: white;
}

.timeline-content{
    overflow: auto;
    height: max-content;
    max-height: 300px;
}

.timeline-content-title{
    font-family: Medium, ui-sans-serif;
    font-size: var(--l);
}

.timeline-content-time{
    font-family: Light, ui-sans-serif;
    font-size: var(--xs);
}

.timeline-divider{
    min-height: 63px;
    width: 2px;
    margin-left: 20px;
    background-color: var(--blue-color);
}`,
    `<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-key active">1</div>
        <div class="timeline-content max-width-400">
            <div class="timeline-content-title">Project Started</div>
            <div class="timeline-content-desc">The amazing UI showcase project began</div>
            <div class="timeline-content-time">2 hours ago</div>
        </div>
    </div>
    <div class="timeline-divider"></div>
    <div class="timeline-item">
        <div class="timeline-key">2</div>
        <div class="timeline-content max-width-400">
            <div class="timeline-content-title">Components Added</div>
            <div class="timeline-content-desc">All major UI components have been implemented</div>
            <div class="timeline-content-time">1 hours ago</div>
        </div>
    </div>
    <div class="timeline-divider"></div>
    <div class="timeline-item">
        <div class="timeline-key">3</div>
        <div class="timeline-content max-width-400">
            <div class="timeline-content-title">Deploy to Production</div>
            <div class="timeline-content-desc">Ready for launch</div>
            <div class="timeline-content-time">Upcoming</div>
        </div>
    </div>
</div>`,
    `.toggle {
    position: relative;
    display: inline-block;
    width: 63px;
    height: 33px;
    border-radius: 33px;
    cursor: pointer;
    transition: .3s;
    border: var(--border);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0 inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.toggle:hover{
    transform: scale(1.02);
    border-color: var(--blue-color);
}

.toggle-check {
    display: none;
}

.toggle-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--third-bg-color);
    transition: 0.3s ease;
    border-radius: 33px;
    width: 25px;
    height: 25px;
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    border: var(--border);
    box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.08) 0 0 0 1px;
}

.toggle-check:checked + .toggle-slider {
    left: 34px;
}

.toggle-status {
    font-size: 16px;
    font-weight: 500;
    min-width: 60px;
}`,
    `<div class="flex-aic-jcs gap-m">
    <label class="toggle">
        <input type="checkbox" class="toggle-check">
        <span class="toggle-slider"></span>
    </label>
    <span class="toggle-status">sample</span>
</div>`,
    `[data-tooltip]:hover::after {
    visibility: visible
}

[data-tooltip] {
    position: relative
}

[data-tooltip]::after {
    visibility: hidden;
    content: attr(data-tooltip);
    position: absolute;
    z-index: 11;
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 7px 11px;
    border-radius: 5px;
    bottom: -2.5rem;
    font-size: var(--xs);
    font-family: Medium, ui-sans-serif;
    left: 0
}`,
    `<a class="sidebar-menu-item" data-tooltip="Background" href="#Background">`
];

const elements = document.getElementsByTagName("code");

for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = code[i];
}
