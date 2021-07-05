class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course
  validates :course_id, uniqueness: { scope: :user_id}
  validates_inclusion_of(:status, in: ["approved", "pending", "denied", "cancelled"])
end
