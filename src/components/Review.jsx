

function Review() {

    






  return (
    <div>
        <div className="bg-grayishBrown p-12 text-center">
            <div className="flex justify-center  items-center mx-auto">
            <h1 className="text-3xl font-bold text-whiteCo">Review</h1>
                <img src="/mug-review.png" alt="mug picture"  className="h-10"/>
            </div>
            <h2 className="text-2xl  text-whiteCo mb-8">What Our Fans Say About Us</h2>


            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-lightBrown shadow-xl p-6 rounded-md text-center mx-auto">
                <p className="mb-4  text-center mx-auto">
                `Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation.`


                </p>
                    <span className="text-lightBlue">
                    @elonmusk
                    </span>
                </div>
                <div className="bg-lightBrown p-6 shadow-xl text-center rounded-md">
                    <p className="mb-4  mx-auto">
                    `Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest.`
                    </p>
                    <span className="text-lightBlue">
                    @JeffBezos
                    </span>
                </div>
                <div className="bg-lightBrown p-6 shadow-xl text-center rounded-md">
                    <p className="mb-4 mx-auto">
                    “Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.”
                    </p>
                    <span className="text-lightBlue">@MrBeast
                    </span>
                </div>
            </div>







        </div>




    </div>
  )
}

export default Review