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

The following code generates the hash:

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
It is then used in the following code to recursively generate all the descendents of a given item:

```
def self.descendents(id, hash)
    return [] unless hash[id]
    return [] if Item.find_by(id: id).parent_id == id
    hash[id].map {|child| descendents(child.id.to_i, hash)}.flatten.concat(hash[id])
  end
  
  ```
Everything (questions, answers, and comments) is an item, and every item is displayed by a React ShowItem component. This helps keep the code DRY. 
