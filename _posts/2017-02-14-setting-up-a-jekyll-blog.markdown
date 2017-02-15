---
layout: post
name: Setting Up A Jekyll Blog
description: This post has information on setting up a Jekyll Blog.
---

## Why Jekyll


[Github Pages supports Jekyll (Github Help)](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/) as a static site generator. Jekyll is also easy to set up, maintain, and troubleshoot.
I thought Jekyll would be the easiest to use for me because Jekyll supports [themes (Jekyll Themes)](http://jekyllthemes.org/) so I can focus on content.

## Getting Started with Jekyll


The basic starting poing is having ruby development enviornment on the machine you plan to host the Jekyll Site. From this point, [everything gets easier (Jekyll Docs)](https://jekyllrb.com/docs/quickstart/).

```bash
#Installs Jekyll Gem
~ $ gem install jekyll bundler
#Creates new Jekyll Site
~ $ jekyll new my-blog
#Changes into new directory
~ $ cd my-blog
#Starts Jekyll Website on localhost:4000
~ $ jekyll serve
```


## Adding Posts to the Website

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Typically the posts I will be creating will be markdown files then generated into HTML files by Jekyll on Github.

## Markdown on Posts

[Github Guide to Markdown](https://guides.github.com/features/mastering-markdown/)

[Github Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Markdown Tutorial](http://www.markdowntutorial.com/)

[Markdown Syntax Highlighting](https://support.codebasehq.com/articles/tips-tricks/syntax-highlighting-in-markdown)
