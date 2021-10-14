class GuestsController < ApplicationController

    def create
        # byebug
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

    # def create
    #     guest = Guest.new(guest_params)
    #     if guest.valid?
    #         guest.save
    #         render json: guest, status: 201
    #     else
    #         render json: {errors: guest.errors.full_messages}, status: 422
    #     end
    # end

    # def update
    #     guest = Guest.find_by(id: params[:id])
    #     guest.assign_attributes(guest_params)

    #     if guest.valid?
    #         guest.save
    #         render json: guest, status: 201
    #     else
    #         render json: {errors: guest.errors.full_messages}, status: 422
    #     end
    # end

    # def destroy
    #     guest = Guest.find_by(id: params[:id])
    #     if guest
    #     guest.destroy
    #     render json: {}, status: :no_content 
    #     else
    #     render json: {error: guest.errors.full_messages}, status: 404
    #     end
    # end
    def login
        # find the user by their username
        guest = Guest.find_by(username: params[:username])
    
        # if the user exists and their password matches, log them in
        if guest 
            # && guest.authenticate(params[:password])
          # save user_id in session so we can use it in future requests
        #   session[:user_id] = user.id
          # return the user in the response
          render json: guest
        else
          # for invalid username/password combos, send error messages to the front end
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
    
    private

    def guest_params
        params.permit(:username, :password, :age)
    end

end
