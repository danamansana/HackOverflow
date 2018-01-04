class Api::ItemsController < ApplicationController
  def index
    # items = Item.all
    # render json: items
    @items = Item.where(content_type: nil).includes(:likes, :children)
    render :index
  end
end
