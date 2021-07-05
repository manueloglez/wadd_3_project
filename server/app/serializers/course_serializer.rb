class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :topic

  belongs_to :user, key: :teacher

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :full_name, :created_at, :updated_at
  end
  has_many :enrollments

  class EnrollmentSerializer < ActiveModel::Serializer
    attributes(:id, :student, :student_id, :status, :created_at, :updated_at,)

    def student
      object.user&.full_name
    end

    def student_id
      object.user&.id
    end

  end
  
end
