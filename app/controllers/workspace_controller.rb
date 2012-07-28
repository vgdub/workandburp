require 'open-uri'
require 'json'


class WorkspaceController < ApplicationController
  def index

    consumer_key = 'y6kx_rHeXbGuTAzI6Y1ouw'
    consumer_secret = 'L85XGxL7KnneXEry_BGgDByb584'
    token = 'uC4XhkX-jcecnAnw4mQAmVxxKsrocQDY'
    token_secret = 'myoGPfJlOz3AIk1Tlj8eyq2L6Wo'

    api_host = 'api.yelp.com'

    @search_term = "wifi"
    
    # @local_zip = "60614"

    consumer = OAuth::Consumer.new(consumer_key, consumer_secret, {:site => "http://#{api_host}"})
    access_token = OAuth::AccessToken.new(consumer, token, token_secret)

    path = "/v2/search?term=#{@search_term}&ll=#{@lat},#{@lon},#{@acc}&limit=5&radius_filter=2000&sort=1"

    @responseyelp = JSON.parse(access_token.get(path).body)

    @lat = cookies[:lat].to_f
    @lon = cookies[:lon].to_f
    @acc = cookies[:acc]

    @response_citygrid = JSON.parse(open("http://api.citygridmedia.com/content/places/v2/search/latlon?what=B.Y.O.B&lat=#{@lat}&lon=#{@lon}&radius=7&page=1&rpp=3&sort=topmatches&publisher=test&format=json").read)

    


    # perform an address/location-based search for cream puffs nearby
    # request = Yelp::V1::Review::Request::Location.new(=
    #             :address => '222 Merchandise Mart',
    #             :city => 'Chicago',
    #             :state => 'IL',
    #             :radius => 2,
    #             :term => 'pickles',
    #             :yws_id => '8_OYsIQfLVSZtQpDx-cuVg')
    # 
    # @response = client.search(request)
  end
end
