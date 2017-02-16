---
layout: post
name: Ruby On Rails
description: This post covers a basic Ruby on Rails overview.
---

## Why Ruby On Rails 

Ruby on Rails makes it easy to develop any website. There are thousands of [Ruby Gems](https://rubygems.org/) that make development go by even faster.

## What is Ruby on Rails

Ruby on Rails is an Model-View-Controller web application framework. Rails makes assumptions about what the developer needs to get started.
Rails Provides for convention over configuration and allows developers to avoid a lot of boilerplate code. 
There are [many more benefits to Rails (Rails Doctorine)](http://rubyonrails.org/doctrine/).

Ruby on Rails is well [Documented (Rails Guides)](http://guides.rubyonrails.org/), and There are many [Ruby on Rails books](https://www.railstutorial.org/book) that provide information.

## Start Developing Ruby on Rails

#### This is for linux development enviornments ([A virtual machine](https://www.virtualbox.org/wiki/VirtualBox) or [Vagrant](https://www.vagrantup.com/) or Native Linux)

Make Sure you have [Ruby (Ruby Enviornment Manager to install Ruby)](https://rvm.io/) Installed on your computer. Make sure bundler gem is installed as well.
```sh 
~ $ which ruby
#Should display $PATH location for ruby
~ $ gem install bundler
~ $ gem install rails
```

After rails is installed, a new project can be created with the command: (replacing what is inside the quotes with your app name)
```sh
~ $ rails new 'my-app'
#Create new rails application 'my-app'
~ $ cd 'my-app'
#Change directories into 'my-app'
~ $ rails s
#Start the Ruby on Rails server
```

This is only a basic guide and should only serve as such. The web has much more to offer than this simple blog post. This is just a resource to get started.
