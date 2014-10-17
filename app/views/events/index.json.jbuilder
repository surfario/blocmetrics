json.array!(@events) do |event|
  json.extract! event, :id, :name, :property_1, :property_2
  json.url event_url(event, format: :json)
end
