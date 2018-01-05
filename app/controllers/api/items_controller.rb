class Api::ItemsController < ApplicationController
  def index
    # items = Item.all
    # render json: items
    @items = Item.where(content_type: nil).includes(:likes, :children)
    render :index
  end

  def show
    render json: Item.item_payload(params[:id].to_i)
  end



  private

  def item_params
    params.require(:item).permit(:id)
  end
end
