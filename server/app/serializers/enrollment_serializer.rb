class EnrollmentSerializer < ActiveModel::Serializer
  attributes(:id, :student, :student_id, :status, :created_at, :updated_at,)
  belongs_to :course

  def student
    object.user&.full_name
  end

  def student_id
    object.user&.id
  end

end
