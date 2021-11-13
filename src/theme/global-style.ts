import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./types";

export const GlobalStyle = createGlobalStyle<{ customTheme: ThemeInterface }>`
  /* http://meyerweb.com/eric/tools/css/reset/
    v5.0.1 | 20191019
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    body {
        line-height: 1;
    }
    menu, ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *{
        box-sizing: border-box;
    }
    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body h1,
    body h2,
    body h3,
    body h4,
    body h5,
    body h6 {
        margin: 0;
    }

    body p {
        margin: 0;
    }

    body ul,
    body li {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    body img {
        display: block;
        max-width: 100%;
    }
    body a,body button,body input,body textarea{
        outline: none;
    }

    body,
    body * ,*:before, *:after {
        box-sizing: border-box;
    }
    
    body{
        font-family: ${(props) => props.customTheme.fonts.main};, sans-serif;
        font-weight: ${(props) => props.customTheme.fontWeight.regular};
        font-size: 16px;
        color : ${(props) => props.customTheme.colors.dark};
    }
`;
