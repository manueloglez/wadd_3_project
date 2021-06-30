class Course < ApplicationRecord
  belongs_to :user
  validates :name, presence: true, uniqueness: true, length: { minimum: 10 }
  validates :topic, presence: true, length: { minimum: 10 }
end
