class Api::SessionsController < ApplicationController

  def create
    
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in(@user)
      render json: {username: @user.username, id: @user.id}
    else
      render json: ['incorrect username or password'], status: 422
    end
  end

  def destroy
    if current_user
      signout
      render json: {}
    else
      render json: ['no current user'], status: 404
    end
  end
end
