#usage: @airline = Airline.find()
class Airline < ApplicationRecord

    # (optional) usage: @airline.reviews
    has_many :reviews

    before_create :slugify
    # why: parameterize "name" and save it in "slug"
    def slugify
        self.slug = name.parameterize
    end

    # (optional) usage: airline.avgscore
    def avg_score
        # take "reviews", take averages of field "score", to float, round to 1 frac
        reviews.average(:score).to_f.round(1)
    end
end
