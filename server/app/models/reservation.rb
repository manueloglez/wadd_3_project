require 'date'

class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :facility
  
  validates :start_time, :end_time, presence: true, uniqueness: { scope: :facility_id, message: "This time slot is not available" }
  validate :end_time_after_start_time
  # validate :start_time_is_valid_datetime
  # validate :end_time_is_valid_datetime

  validates_inclusion_of(:status, in: ["approved", "pending", "denied", "cancelled"])
  
  private

    def end_time_after_start_time
      return if end_time.blank? || start_time.blank?

      if end_time < start_time
        errors.add(:end_time, "must be after the start date")
      end
    end

    def start_time_is_valid_datetime
      errors.add(:start_time, 'must be a valid datetime') if ((DateTime.parse(start_date) rescue ArgumentError) == ArgumentError)
    end

    def end_time_is_valid_datetime
      errors.add(:end_time, 'must be a valid datetime') if ((DateTime.parse(end_date) rescue ArgumentError) == ArgumentError)
    end
end
