class WorkspaceController < ApplicationController
  def index
    consumer_key = 'y6kx_rHeXbGuTAzI6Y1ouw'
    consumer_secret = 'L85XGxL7KnneXEry_BGgDByb584'
    token = 'uC4XhkX-jcecnAnw4mQAmVxxKsrocQDY'
    token_secret = 'myoGPfJlOz3AIk1Tlj8eyq2L6Wo'

    api_host = 'api.yelp.com'

    @search_term = "wifi"
    
    @local_zip = "60614"

    consumer = OAuth::Consumer.new(consumer_key, consumer_secret, {:site => "http://#{api_host}"})
    access_token = OAuth::AccessToken.new(consumer, token, token_secret)

    path = "/v2/search?term=byob+#{@search_term}&location=#{@local_zip}&limit=5&radius_filter=2000&sort=1#open_now=7349"

    @response = JSON.parse(access_token.get(path).body)

    # perform an address/location-based search for cream puffs nearby
    # request = Yelp::V1::Review::Request::Location.new(
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
