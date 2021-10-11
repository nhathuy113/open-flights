# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USAGE: rails db:seed

airlines = Airline.create(
    [
    { name: 'Star Wars' }, 
    { name: 'United Airlines'}
    ]
)

reviews = Review.create([
    { 
        description: 'meh',
        score: '3',
        airline: airlines.first
    },
    { 
        description: 'Im lovin it',
        score: '5',
        airline: airlines.first
    }, 
])