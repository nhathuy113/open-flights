class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  # attributes :name, :slug
  attributes :name, :slug, :avg_score

  has_many :reviews
end
