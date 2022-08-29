const About = () => {
    // if we need to repeat any more of these, set them as another component and render them w the proper styles based on % 2 === 0 for even odd
  return (
    <div className="p-20">
        <h2 className="text-center text-3xl font-semibold mx-4 mb-4">About us</h2>
        <hr></hr>
            <div className="flex m-8">
                <img className="grow mr-4" src="https://picsum.photos/150/100" alt="placeholder"></img>
                <div className="w-1/2">
                    <h2 className="text-center text-2xl font-semibold mx-4 mb-4">some header here</h2>
                    <p>Some other more descriptive text down here that tells our reader all about the benifits of our amazing thing</p>
                </div>
                </div>
                <hr></hr>
            <div className="flex flex-row-reverse m-8">
                <img className="grow ml-4" src="https://picsum.photos/150/100" alt="placeholder"></img>
                <div className="w-1/2">
                    <h2 className="text-center text-2xl font-semibold mx-4 mb-4">some header here</h2>
                    <p>Some other more descriptive text down here that tells our reader all about the benifits of our amazing thing</p>
                </div>
            </div>
        </div>
  )
}

export default About