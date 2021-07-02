class CreateFacilities < ActiveRecord::Migration[6.1]
  def change
    create_table :facilities do |t|
      t.string :name
      t.text :location
      t.boolean :is_available, default: true
      t.string :features, array: true, default: []

      t.timestamps
    end
  end
end
