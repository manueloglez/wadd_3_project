class User < ApplicationRecord
    has_secure_password
    has_many :courses, dependent: :destroy
    has_many :enrollments, dependent: :destroy
    has_many :enrolled_courses, through: :enrollments, source: :course
    has_many :facilities, dependent: :destroy
    has_many :reservations, dependent: :destroy
    has_many :reserved_facilities, through: :reservations, source: :facilities

    # Validations
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

    def full_name
        "#{first_name} #{last_name}".strip
    end

end
