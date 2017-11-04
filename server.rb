require 'sinatra'
require "net/http"


set :bind, '0.0.0.0'  # bind to all interfaces

DARK_SKY_API_KEY = "7f1e494905f2e9dadb9002a84f2c8f18"

get '/' do
  erb :index
end


get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end
