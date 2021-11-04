class GuestsController < ApplicationController

    def create
        guest = Guest.new(guest_params)
        if guest.valid?
            guest.save
            render json: guest, status: 201
        else
            render json: {error: guest.errors.full_messages}, status: 422
        end
    end


    def show
        guest = Guest.find_by(id: params[:id])
        if guest
            render json: guest
        else
        render json: {error: "Guest not found"}, status: 404
        end
    end


    def login
        guest = Guest.find_by(username: params[:username])
    
        if guest 
          render json: guest
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
    
    private

    def guest_params
        params.permit(:username, :password, :age)
    end

end
