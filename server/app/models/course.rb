class Course < ApplicationRecord
  belongs_to :user
  has_many :enrollments, -> { order("updated_at DESC") }, dependent: :destroy
  has_many :students, through: :enrollments, source: :user

  before_validation :capitalize_name

  validates :name, presence: true, uniqueness: true
  validates :topic, presence: true

  private

  def capitalize_name
    self.name.capitalize!
  end

end
