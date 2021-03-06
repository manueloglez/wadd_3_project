class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :topic
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
