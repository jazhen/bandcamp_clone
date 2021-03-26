# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  name         :string
#  user_id      :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  release_date :datetime         not null
#

class Album < ApplicationRecord
  has_one_attached :art, dependent: :destroy
  belongs_to :user
  has_many :tracks, dependent: :destroy, inverse_of: :album #, index_errors: true
  accepts_nested_attributes_for :tracks, allow_destroy: true

  validates :user_id, :release_date, presence: true

  validates :name, length: { in: 1..100,
                             too_short: 'Please enter an album name.',
                             too_long: 'Album name is too long (100 characters max).' }

  validate :validate_art

  validates_associated :tracks

  def validate_art
    if art.attached?
      if !['image/jpeg', 'image/png'].include?(art.blob.content_type)
        errors[:art] << 'File is not of type .jpg or .png.'
        art.purge
      # elsif art.blob.byte_size > 5_000_000
      #   errors[:art] << 'File size is larger than 5MB.'
      #   art.purge
      end
    else
      errors[:art] << 'Please add cover art for this album.'
    end
  end
end
