json.items do
  @item.descendents.each do |descendent|
    json.set! descendent.id do
      json.extract! descendent, :id, :body
    end
    end
end
json.likes do
end
