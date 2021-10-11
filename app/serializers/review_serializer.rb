class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :score, :airline_id
end
