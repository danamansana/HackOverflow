class Api::LikesController < ApplicationController

def create
  like = Like.create(like_params)
  render json: like
end

private
  def like_params
    params.require(:like).permit(:user_id, :item_id, :value)
  end
end
