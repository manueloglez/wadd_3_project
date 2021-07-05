class Api::V1::ReservationsController < Api::ApplicationController
  before_action :find_reservation, only: [:show, :destroy, :update]
  before_action :authenticate_user!, except: [:index, :show]

      def index
        reservations = Reservation.order(created_at: :desc)
        render(json: reservations, each_serializer: ReservationSerializer)
      end

      def create
        @facility = Facility.find params[:facility_id]
        reservation = Reservation.new reservation_params 
        reservation.facility = @facility
        reservation.user = current_user
        if reservation.save
            render json: { id: reservation.id }
        else
          render(
            json: { status: 422  },
            status: 422,
          )
        end
    end

    def update
        if can? :update, @reservation
          @reservation.update reservation_params
            render json: { id: @reservation.id }
        else
          render(
            json: { status: 422 },
            status: 422,
          )
        end
      end
      

    def destroy
        if can? :destroy, @reservation
            @reservation.destroy
            render(json: { status: 200 }, status: 200)
          
        else 
            render(
                json: { status: 422 },
                status: 422,
              )
        end
    end

    private

    def find_reservation
        @reservation ||= Reservation.find params[:id]
    end

    def reservation_params
        params.require(:reservation).permit(:status, :start_time, :end_time)
    end
end
