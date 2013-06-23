class StatusController < ApplicationController
  def index
  end
  def echo
  	@resp = {:text =>  params[:text]}.to_json
  	respond_to do |format|
  		format.json {render json: @resp }
  	end
  end
end
