class Api::ItemsController < ApplicationController
  def index
    # items = Item.all
    # render json: items

    if (params[:query])
      @items = Item.where(content_type: "question").where("body ~* ?", params[:query].split(",").join("|"))
    else
      @items = Item.where(content_type: "question").includes(:likes, :children)
    end
    render :index
  end

  def show

    render json: Item.item_payload(params[:id].to_i)
  end

  def create
    item = Item.create(item_params)

    render json: {"item" => item, "user" => {item.id => item.user}}
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
    render json: {"item" =>item, "user" => {item.id => item.user}}
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
    render json: {}
  end



  private

  def item_params
    params.require(:item).permit(:id, :user_id, :body, :parent_id, :content_type, :title)
  end

end
