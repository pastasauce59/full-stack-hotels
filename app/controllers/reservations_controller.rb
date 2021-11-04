class ReservationsController < ApplicationController

    def index
        reservations = Reservation.all
        render json: reservations
    end

    def create
        resv = Reservation.new(resv_params)
        if resv.valid?
            resv.save
            render json: resv, status: 201
        else
            render json: {errors: resv.errors.full_messages}, status: 422
        end
    end

    def destroy
        resv = Reservation.find_by(id: params[:id])
        if resv
          resv.destroy
          render json: {message: "Content deleted"}
        else
          render json: {error: "Reservation not found"}, status: 404
        end
      end



    private

    def resv_params
        params.permit(:date_start, :date_end, :room_id, :guest_id)
    end

end


