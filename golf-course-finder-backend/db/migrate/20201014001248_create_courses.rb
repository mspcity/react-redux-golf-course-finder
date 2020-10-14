class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.string :club_name
      t.integer :number_of_holes
      t.integer :course_length
      t.string :club_type
      t.string :address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :phone
      t.string :website
      t.string :image
      t.integer :likes

      t.timestamps
    end
  end
end
