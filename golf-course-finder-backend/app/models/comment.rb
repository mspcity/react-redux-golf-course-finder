class Comment < ApplicationRecord
  belongs_to :course
  validates :content, presence: true
  validates :name, presence: true
end
