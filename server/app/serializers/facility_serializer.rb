class FacilitySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :features, :is_available
  belongs_to :user, key: :admin

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :full_name
  end
  has_many :reservations

  # class ReservationSerializer < ActiveModel::Serializer
  #   attributes(:id, :start_time, :end_time, :teacher, :teacher_id,  :status, :created_at, :updated_at,)

  #   def teacher
  #     object.user&.full_name
  #   end

  #   def teacher_id
  #     object.user&.id
  #   end

  #   def starts_time
  #     attributes['starts_time'].strftime("%m/%d/%Y %H:%M")
  #   end

  #   def end_time
  #     attributes['end_time'].strftime("%m/%d/%Y %H:%M")
  #   end

  # end
end
