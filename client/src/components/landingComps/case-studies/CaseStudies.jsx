import React from 'react'

const CaseStudies = () => {

    const caseStudies = [
        {
          customer: "Trendy Threads Boutique",
          industry: "Retail",
          challenge: "Increase foot traffic and drive sales during slow periods.",
          solution: "Implemented SMS marketing campaigns announcing exclusive in-store promotions and flash sales.",
          results: [
            "20% Increase in Foot Traffic",
            "15% Boost in Sales",
            "98% Open Rate"
          ],
          testimonial: "Working with this team was a game-changer for our business. The personalized SMS campaigns not only brought in more customers but also boosted our sales significantly."
        },
        {
          customer: "Healthy Eats Cafe",
          industry: "Hospitality",
          challenge: "Enhance customer loyalty and increase repeat visits.",
          solution: "Launched an email marketing campaign featuring weekly specials, loyalty rewards, and personalized meal recommendations.",
          results: [
            "25% Increase in Repeat Visits",
            "30% Growth in Loyalty Program Sign-ups",
            "40% Higher Engagement Rate"
          ],
          testimonial: "The email campaigns were a huge hit with our customers. We saw a significant increase in repeat visits and our loyalty program grew faster than we expected. The personalized meal recommendations were especially popular."
        },
        {
          customer: "Elite Fitness Gym",
          industry: "Health & Fitness",
          challenge: "Boost membership renewals and engage inactive members.",
          solution: "Executed a combined SMS and email campaign offering special renewal discounts and personalized workout plans.",
          results: [
            "35% Increase in Membership Renewals",
            "50% Reactivation of Inactive Members",
            "95% Open Rate for SMS"
          ],
          testimonial: "The dual approach of SMS and email was incredibly effective. Our membership renewals shot up and we managed to re-engage many of our inactive members. The personalized workout plans added a nice touch that our members appreciated."
        }
      ];
      
  return (
    <div className="bg-gray-100 py-12 ">
    <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-900">What Our Clients Think</h2>
    </div>

    <div className="grid lg:grid-cols-3 gap-6 md:max-w-[90%] mx-auto p-6">
        {caseStudies.map((caseStudy, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{caseStudy.customer}</h3>
            <p className="text-gray-600 mb-4"><em>{caseStudy.industry}</em></p>
            <h4 className="text-xl font-semibold mb-2">Challenge:</h4>
            <p className="text-gray-700 mb-4">{caseStudy.challenge}</p>
            <h4 className="text-xl font-semibold mb-2">Solution:</h4>
            <p className="text-gray-700 mb-4">{caseStudy.solution}</p>
            <h4 className="text-xl font-semibold mb-2">Results:</h4>
            <ul className="text-gray-700 mb-4">
                {caseStudy.results.map((result, i) => (
                <li key={i}>{result}</li>
                ))}
            </ul>
            <h4 className="text-xl font-semibold mb-2">Testimonial:</h4>
            <p className="text-gray-700 italic">"{caseStudy.testimonial}"</p>
            </div>
        </div>
        ))}
    </div>
    </div>

  )
}

export default CaseStudies