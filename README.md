## Hackoverflow

Hackoverflow is a StackOverflow clone. It uses Ruby on Rails to provide a backend database, and React/Redux on the frontend

## Features

Hackoverflow supports the following features:

* Signing up new users
* Logging in/out users
* Searching for questions by content
* Posting, updating and deleting questions, answers, and comments for logged in users
* Upvoting and downvoting questions, answers, and comments. Users are limited to up or down voting only other users' content, and cannot upvote or downvote multiple times


## Live Site
[HackOverflow](https://aa-hack-overflow.herokuapp.com/#/)

## Implementation

The most technically interesting implementation detail is probably finding all descendents (answers, comments, comments on answers) of a question in order for the site to display that question, without generating an N+1 problem when the site queries the database. This is achieved by using a single database query to generate a hash that records all items together with their children, and can then be used to find all descendents:

```
def self.item_hasher
    all_items = Item.includes(:likes, :user).all
    item_hash_value = Hash.new {|h,k| h[k] = []}
    all_items.each do |item|
      item_hash_value[item.parent_id].push(item)
    end
    return item_hash_value
  end
  ```
