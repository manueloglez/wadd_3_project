class Api::V1::EnrollmentsController < Api::ApplicationController
    before_action :find_enrollment, only: [:destroy, :update]
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
      enrollments = Enrollment.order(created_at: :desc)
      render(json: enrollments, each_serializer: EnrollmentSerializer)
    end

    def create
        @course = Course.find params[:course_id]
        enrollment = Enrollment.new enrollment_params 
        enrollment.course = @course
        enrollment.user = current_user
        if enrollment.save
            render json: { id: enrollment.id }
        else
          render(
            json: { status: 422  },
            status: 422,
          )
        end
    end

    def update
        if can? :update, @enrollment
        @enrollment.update enrollment_params
          render json: { id: @enrollment.id }
        else
          render(
            json: { status: 422 },
            status: 422,
          )
        end
      end
      

    def destroy
        if can? :destroy, @enrollment
            @enrollment.destroy
            render(json: { status: 200 }, status: 200)
          
        else 
            render(
                json: { status: 422 },
                status: 422,
              )
        end
    end

    private

    def find_enrollment
        @enrollment ||= Enrollment.find params[:id]
    end

    def enrollment_params
        params.require(:enrollment).permit(:status)
    end
      

end
