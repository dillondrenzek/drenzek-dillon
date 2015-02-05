require 'sinatra'
require 'haml'
require 'rack-flash'

enable :sessions
use Rack::Flash

get '/' do
	haml :index
end