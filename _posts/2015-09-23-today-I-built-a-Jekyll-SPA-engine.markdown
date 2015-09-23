---
layout: post-content-html
title:  "Today I built a Jekyll SPA engine!"
date:   2015-09-23 04:39:00
---
Lately I've been working on the [Code for Tucson][c4t] website which is built on Jekyll. It's pretty fun to work with, but I miss how fun and clean it is to work with JavaScript and React.
 
The page is hosted with GitHub pages, another great platform to build a website on, but it's not exactly an open platform. You're limited to their locked-down Jekyll process.

So I asked myself if I could have the best of both worlds. This website is designed as a single-page React app and it uses Jekyll to host the site information via JSON files built with the templating.

Why not just run a simpler app on GitHub Pages? Well, for one this there's plenty of work to do to aggregate blog posts and transform them into the endpoint data. Jekyll does a great job at that, so I'll let it do what it does best: transform Markdown content into publicly-reachable static files ( Jekyl :: md => JSON _for my Haskell friends_) and I'll build the UI in React.

It's working quite well. There was [one other blog][gh-react-blog] that I found doing something like this, but the author was building the [page content itself as JSX components][blog-as-jsx], stripping away lots of the flexibility that Jekyll-as-a-JSON-service can offer.

[c4t]: http://codefortucson.org
[gh-react-blog]: http://keithy.me/#/projects
[blog-as-jsx]: https://github.com/keithyong/keithyong.github.io/blob/master/src/js/About.jsx
