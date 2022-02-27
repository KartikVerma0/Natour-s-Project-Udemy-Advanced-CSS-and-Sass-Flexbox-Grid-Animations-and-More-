window.addEventListener("load", () => {
    const headerTl = gsap.timeline({
        defaults: {
            ease: "back",
            opacity: 0,
            duration: 1.25,
        },
    });
    headerTl
        .from(".header-primary--main", {
            x: -100,
        })
        .from(
            ".header-primary--sub",
            {
                x: 100,
            },
            "<"
        )
        .from(".btn", {
            y: 50,
            duration: 1,
        });
});
