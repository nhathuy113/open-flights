module Api
    module V1
        class ReviewsController < ApplicationController
            def index
                # airline = Airline.find_by(slug: params[:slug])
                # render json: AirlineSerializer.new(airline).serialized_json

                airline = Airline.find_by(airline_id: params[:airline_id])
                reviews = airline.reviews
                render json: ReviewSerializer.new(reviews).serialized_json
            end

            def create
                review = Review.new(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            private
            def review_params
                params.require(:review).permit(:description, :score, :airline_id)
            end
        end
    end
end
