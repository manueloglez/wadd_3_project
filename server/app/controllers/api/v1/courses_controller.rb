class Api::V1::CoursesController < Api::ApplicationController
  before_action :find_course, only: [:show, :destroy, :update]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :authorize!, only: [:update, :destroy]
  
  def index
    courses = Course.order(created_at: :desc)
    render(json: courses, each_serializer: CourseSerializer)
  end

  def show
    render json: @course
  end

  def create
    course = Course.new course_params
    course.user = current_user
    if course.save
      render json: { id: course.id }
    else
      render(
        json: { status: 422 },
        status: 422,
      )
    end
  end

  def update
    if @course.update course_params
      render json: { id: @course.id }
    else
      render(
        json: { status: 422 },
        status: 422,
      )
    end
  end

  def destroy
    @course.destroy
    render(json: { status: 200 }, status: 200)
  end

  private

  def find_course
    @course ||= Course.find params[:id]
  end

  def course_params
    params.require(:course).permit(:name, :topic)
  end

  def authorize!
    render(json: { status: 401 }, status: 401) unless can? :crud, @course
  end

end
