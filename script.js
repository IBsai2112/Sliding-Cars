var tl = gsap.timeline({
    repeat:-1
});



tl.to(".imageContainer", {
    width: "100%",
    ease: Expo.esasInOut,
    duration: 2,
    stagger: 2

},'a')

.to(".text h1",{
    esas: Expo.easeInOut,
    stagger: 2,
    top: 0
},'a')

.to(".text h1",{
    delay:2,
    esas: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
},'a')

.to(".smallText h5",{
    esas: Expo.easeInOut,
    stagger: 2,
    top: 0
},'a')

.to(".smallText h5",{
    delay:2,
    esas: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
},'a')



window.addEventListener('beforeunload', function (e){
    var message = 'Are you shure want to leave?';
    e.returnValue = message;
});