require 'open-uri'
require 'json'


class WorkspaceController < ApplicationController
  def index

    consumer_key = 'j12f--Z2aQgpU4NxiJ1OZQ'
    consumer_secret = 'rPOFIoC9PVY6_Tre3VZI3rUFBqI'
    token = '-fCcp8oYoTyyODk8RBf_4Mpg7OePUZ05'
    token_secret = 'HrwOxqpIxMTaCM_oA5Wk_pNzR9s'

    api_host = 'api.yelp.com'

    @search_term = "wifi"
    
    @local_zip = "60654"

    consumer = OAuth::Consumer.new(consumer_key, consumer_secret, {:site => "http://#{api_host}"})
    access_token = OAuth::AccessToken.new(consumer, token, token_secret)

    path = "/v2/search?term=#{@search_term}&location=#{@local_zip}&limit=5&radius_filter=2000&sort=1"

    @responseyelp = JSON.parse(access_token.get(path).body)

    latitude = cookies[:lat]
    longitude = cookies[:lon] 

    def split(a)
        b = "%.3f" % a
        return b
    end

    @lat_string = split(latitude.to_f).to_s
    @lon_string = split(longitude.to_f).to_s

    @lat = @lat_string
    @lon = @lon_string

    # @lat = cookies[:lat].to_f
    # @lon = cookies[:lon].to_f
    # @acc = cookies[:acc]

    @response_citygrid = JSON.parse(open("http://api.citygridmedia.com/content/places/v2/search/latlon?what=B.Y.O.B&lat=#{@lat}&lon=#{@lon}&radius=4&page=1&rpp=5&sort=topmatches&publisher=test&format=json").read)

    


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
