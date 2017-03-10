---
layout: post
name: Setting up Sunspot Solr with Ruby on Rails
description: This post covers how to install Sunspot-Solr and get Solr Search working in Production.
---

## Overview

Ubuntu Version: 16.04

Ruby   Version: 2.3.1

Rails  Version: 5.0.1

Solr   Version: 6.2.1

## What is Solr

[Solr](http://lucene.apache.org/solr/) is an open source search platform built on Apache Lucene.

I will be using it to index posts and users for an application and use it for fast retrevial of those objects.
It can be used to index and search anything. Solr is used for item search from databases.


## Sunspot-Solr 2.2.7 Gem

[Sunspot Solr](https://github.com/sunspot/sunspot) is a Ruby Gem implementation of Solr for use with Ruby on Rails applications. 

I will be using this gem to connect to a Solr service.

## Installing Sunspot on Rails Application

A general guide to getting Sunspot installed,
For more information, see [Sunspot's Documentation](https://github.com/sunspot/sunspot).

Add to Application Gemfile:

```ruby
gem 'sunspot_rails'
gem 'sunspot_solr'
```

Run:

```bash
bundle install
#Generate a default configuration for sunspot
rails generate sunspot_rails:install
#For test and development, Start sunspot/solr with:
rake sunspot:solr:start
```

See [Sunspot's Documentation](https://github.com/sunspot/sunspot#setting-up-objects) for setting up and searching objects inside a database. 

## Moving to Production

### Installing Solr On The Production Machine

To get Solr Working in Production, you basically have to install the solr service on your machine and connect to the service through some rails configuration
files. This part can be very tricky and took me some time to figure out, but this will be a quick guide with minimal dependencies and quick setup.

To make things easy, `SSH` into your ubuntu production machine and log into root user with `sudo su`.

Solr Requires Java so I installed Java with the following commands:

```bash
apt-add-repository -y ppa:webupd8team/java
apt-get update
echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections
apt-get install -y oracle-java8-installer
```

After Java is installed, Solr is ready to be installed:

```bash
cd /tmp
wget http://www.us.apache.org/dist/lucene/solr/6.2.1/solr-6.2.1.tgz
tar xzf solr-5.2.1.tgz solr-5.2.1/bin/install_solr_service.sh --strip-components=2
bash ./install_solr_service.sh solr-6.2.1.tgz
service solr status
```

These commands should get solr up and running and to check this, go to 'youripaddress:8983' in a browser and you should see a Solr Web Interface. 
Solr should be running on port 8983. It is best practice to block this port from all except localhost if you are running production on one system. (This port's web interface is exposed by default. 
Only allow servers you want to see this port to see this port by blocking all other ip addresses. Having this port open can expose data and poses as a serious security threat.)

### Solr in production with Rails

Solr Should be ready somewhat out of box for rails. There are just a few configurations that need to be made. 
This setup consumes the most time. 

Creating a Solr Collection for your Rails application.

`su - solr -c "/opt/solr/bin/solr create -c solr_sunspot_example -n data_driven_schema_configs"`

In this example, we named our collection `solr_sunspot_example`, This creates an empty collection at `/var/solr/data/solr_sunspot_example`, which we will refer to in our rails configuration (kinda).
After this is done, restart the solr service with: 

`service solr restart`

At this point, solr should be running and our collection should be set up.
We can finally connect to our solr collection through rails by modifying the `config/sunspot.yml` file in our Rails Folder.

```ruby
production:
  solr:
    hostname: localhost
    port: 8983
    log_level: WARNING
    path: /solr/solr_sunspot_example
```

With this, the rails app should be able to connect to Solr. Run `rake sunspot:solr:reindex` and everything should be in working order.


# Resources

<http://www.artur-rodrigues.com/tech/2015/09/21/taking-solr-5-and-sunspot-rails-to-production.html>

<https://www.digitalocean.com/community/tutorials/how-to-install-solr-5-2-1-on-ubuntu-14-04>

<https://www.howtoforge.com/tutorial/how-to-install-and-configure-solr-on-ubuntu-1604/>

<http://docs.alfresco.com/5.1/tasks/solr-reindex.html>

<https://docs.websolr.com/docs/sunspot-solr-client-for-ruby>

<http://lucene.apache.org/solr/>
















