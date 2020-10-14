class Course < ApplicationRecord
  has_many :comments
  validates :club_name, presence: true, uniqueness: true
  validates :number_of_holes, presence: true
  validates :course_length, presence: true
  validates :type, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip_code, presence: true
  validates :phone, presence: true
  validates :website, presence: true
  validates :image, presence: true
end
