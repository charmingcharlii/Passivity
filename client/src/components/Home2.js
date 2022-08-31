import logo from "../assets/PassivityLogo.png"

const Home = () => {
    return (
        <>
            <main>
                <div class="container container-main">
                    <section class="section section-one">
                        <img
                            class="section-image section-image-1"
                            src="images/illustration-grow-together.svg"
                            alt="A sketched man and woman wearing black and grey while standing on opposite sides"
                        />
                        <div class="section-text">
                            <h2 class="section-title">Grow Together</h2>
                            <p class="section-paragraph">
                                Generate meaningful discussions with our audience and build a
                                strong, loyal community. Think of the insightful conversations you
                                miss out on with a feedback form.
                            </p>
                        </div>
                    </section>

                    <section class="section section-two">
                        <img
                            class="section-image section-image-2"
                            src="images/illustration-flowing-conversation.svg"
                            alt="A sketched group of people sitting on a table in the nature and having a conversation"
                        />

                        <div class="section-text section-text-opposite">
                            <h2 class="section-title">Flowing Converstations</h2>
                            <p class="section-paragraph">
                                You wouldn't paginate a conversation in real life, so why do it
                                online? Our threads have just-in-time loading for a more natural
                                flow.
                            </p>
                        </div>
                    </section>

                    <section class="section section-three">
                        <img
                            class="section-image section-image-3"
                            src="images/illustration-your-users.svg"
                            alt="Three sketched people each of them standing next to a speech box"
                        />
                        <div class="section-text">
                            <h2 class="section-title">Your Users</h2>
                            <p class="section-paragraph">
                                It takes no time at all to integrate Huddle with your app's
                                authentication solution. This means, once signed in to your app,
                                your users can start chatting immediately.
                            </p>
                        </div>
                    </section>

                    <section class="section-4">
                        <div class="section-bottom">
                            <h2 class="section-bottom-title">Ready To Build Your Community?</h2>
                            <a class="btn section-btn" href="#">Get Started For Free</a>
                        </div>
                    </section>
                </div>
            </main>


        </>
    )
}

export default Home