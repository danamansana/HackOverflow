@items.each do |item|
  hash = {item.id => {"body" => item.body, "author" => item.user.username}}
  json.merge! hash
end
