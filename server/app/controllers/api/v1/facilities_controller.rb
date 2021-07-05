class Api::V1::FacilitiesController < Api::ApplicationController
  before_action :find_facility, only: [:show, :destroy, :update]
  before_action :authenticate_user!, except: [:index, :show]
    def index
        facilities = Facility.order(created_at: :desc)
        render(json: facilities, each_serializer: FacilitySerializer)
    end

    def show
      render json: @facility
    end

    def create
      
      facility = Facility.new facility_params 
      facility.user = current_user
      if current_user.isAdmin?
         if facility.save
          render json: { id: facility.id }
        else
        render(
          json: { status: 422  },
          status: 422,
        )
        end
      end
    end
    

  def update
      if can? :update, @facility
      @facility.update facility_params
        render json: { id: @facility.id }
      else
        render(
          json: { status: 422 },
          status: 422,
        )
      end
    end
  
    

  def destroy
      if can? :destroy, @facility
          @facility.destroy
          render(json: { status: 200 }, status: 200)
        
      else 
          render(
              json: { status: 422 },
              status: 422,
            )
      end
  end

  private

  def find_facility
      @facility ||= Facility.find params[:id]
  end

  def facility_params
      params.require(:facility).permit(:id, :name, :location, :features, :is_available)
  end

end
