# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
User.destroy_all

tax_img = 'https://bw-borovoice-site.s3.amazonaws.com/frequent_photos/images/Money-taxes-budget.jpg'
home_improvement_img = 'https://www.homeserve.com/sc/media/hs/blog/tighten-pip-leak.jpg?h=1384&w=2632&la=en&hash=615CDFA0728FDD6FBBBE10E41BB62E2C'
budget_img = 'https://www.moneyunder30.com/wp-content/uploads/2018/10/Budgeting-in-Your-20s-648x364-c-default.jpg'
work_img = 'https://www.thebalancecareers.com/thmb/5KPQjR4iqHP6-PrshpjDfQtpqrw=/950x0/filters:max_bytes(150000):strip_icc():format(webp)/top-skills-every-professional-needs-to-have-4150386-Final-c7a102cfaf8a4a57a9d09cf0a9f03280.png'

puts "Movie Seeds"
#URL (for vid), title, thumbnail image, type (category)
tax1 = Video.create(url: 'https://youtu.be/NtVYBYELwJI',
                    title: 'How to do Taxes for the First Time',
                    thumbnail: tax_img,
                    category: 'tax') 

tax2 = Video.create(url: 'https://youtu.be/ntmvzLi1T2k',
                    title: 'Step-By-Step: File Your Taxes Online For Free',
                    thumbnail: tax_img,
                    category: 'tax')

tax3 = Video.create(url: 'https://youtu.be/Av6BOG8pOTE',
                    title: 'How to File Your Own Taxes - What You Need',
                    thumbnail: tax_img,
                    category: 'tax')

homeImprove1 = Video.create(url: 'https://youtu.be/_qGOm2XZ7mg',
                            title: 'Toilet Wont Fully Flush - Easy Fix!',
                            thumbnail: home_improvement_img,
                            category: 'home improvement')

homeImprove2 = Video.create(url: 'https://youtu.be/iir7DNeI2iA',
                            title: 'Toilet Wont Flush Water Stays in Bowl',
                            thumbnail: home_improvement_img,
                            category: 'home improvement')

homeImprove3 = Video.create(url: 'https://youtu.be/YRcSA8pZBFk',
                            title: 'How to Change Air Filters in a House HVAC Unit',
                            thumbnail: home_improvement_img,
                            category: 'home improvement')

budget1 = Video.create(url: 'https://youtu.be/Hqccf7o_bDU',
                        title: 'How to Budget Monthly for Beginners',
                        thumbnail: budget_img,
                        category: 'budgeting')

budget2 = Video.create(url: 'https://youtu.be/NskNfAlD3wU',
                        title: '7 Places Your Money Needs to Go (How to Save Money)',
                        thumbnail: budget_img,
                        category: 'budgeting')

budget3 = Video.create(url: 'https://youtu.be/rqPIG3QcrDE',
                        title: 'How to Budget from Paycheck to Paycheck',
                        thumbnail: budget_img,
                        category: 'budgeting')

work1 = Video.create(url: 'https://youtu.be/EMXzgDCX37k',
                    title: 'Your Guide to Getting a Job After College',
                    thumbnail: work_img,
                    category: 'professional')

work2 = Video.create(url: 'https://youtu.be/JEnpQJmKIY0',
                    title: 'How I Got Multiple Jobs After College! 3 Strategies for Graduates',
                    thumbnail: work_img,
                    category: 'professional')

work3 = Video.create(url: 'https://youtu.be/RBXZlYdiizk',
                    title: 'What to do After College',
                    thumbnail: work_img,
                    category: 'professional')

puts "Users"
#Make two users, name, password

ben = User.create(name: 'ben123',
                    password: 'ben123')

anne = User.create(name: 'anne123',
                    password: 'anne123')