class Facility < ApplicationRecord
    belongs_to :user
    has_many :reservations, -> { order("updated_at DESC") }, dependent: :destroy
    has_many :teachers, through: :reservations, source: :user
  
    before_validation :capitalize_name
  
    validates :name, presence: true, uniqueness: true
    validates :location, presence: true
  
    private
  
    def capitalize_name
      self.name.capitalize!
    end
end
