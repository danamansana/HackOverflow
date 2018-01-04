@items.each do |item|
  hash = {item.id => {"body" => item.body, "author" => item.user.username, "likes" => item.likes.length, "answers" => item.children.length}}
  json.merge! hash
end