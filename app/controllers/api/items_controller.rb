class Api::ItemsController < ApplicationController
  def index
    # items = Item.all
    # render json: items
    @items = Item.where(content_type: nil).includes(:likes, :children)
    render :index
  end

  def show
    @item = Item.find_by_id(params[:id])
    # render :show
    render json: {@item.id => @item}
  end

  private

  def item_params
    params.require(:item).permit(:id)
  end
end
