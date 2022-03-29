class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :price
      t.text :review
      t.string :difficulty
      t.references :platform

      t.timestamps
    end
  end
end
