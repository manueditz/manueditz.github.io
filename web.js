document.addEventListener("DOMContentLoaded", function() {
    const visitChannelLink = document.getElementById("visitChannel");
    const hiddenLinkContainer = document.getElementById("hiddenLinkContainer");
    const hiddenLink = document.getElementById("hiddenLink");

    // Replace this with your actual YouTube channel URL
    const youtubeChannelURL = "https://youtube.com/@_manu._editz?si=p5LvKr6FYeOpZsQA";

    // Click event listener for visiting YouTube channel
    visitChannelLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior (opening a new tab)
        
        // Redirect user to YouTube channel
        window.open(youtubeChannelURL, "_blank");

        // After visiting the channel, ask if user has subscribed (simulated here)
        setTimeout(function() {
            const isSubscribed = confirm("Have you subscribed to our YouTube channel?");

            if (isSubscribed) {
                hiddenLinkContainer.style.display = "block"; // Show the hidden link container
            }
        }, 5000); // Simulating a delay to allow user to visit the channel
    });

    // Set the hidden link URL
    hiddenLink.href = "https://www.yourhiddenwebsite.com";
});
document.addEventListener("DOMContentLoaded", function() {
    const visitChannelLink = document.getElementById("visitChannel");
    const hiddenLinkContainer = document.getElementById("hiddenLinkContainer");
    const hiddenLink = document.getElementById("hiddenLink");

    // Replace this with your actual YouTube channel URL
    const youtubeChannelURL = "https://www.youtube.com/channel/YOUR_CHANNEL_ID";

    // Click event listener for visiting YouTube channel
    visitChannelLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior (opening a new tab)
        
        // Redirect user to YouTube channel
        window.open(youtubeChannelURL, "_blank");

        // After visiting the channel, ask if user has subscribed (simulated here)
        setTimeout(function() {
            const isSubscribed = confirm("Have you subscribed to our YouTube channel?");

            if (isSubscribed) {
                hiddenLinkContainer.style.display = "block"; // Show the hidden link container
            }
        }, 5000); // Simulating a delay to allow user to visit the channel
    });

    // Set the hidden link URL
    hiddenLink.href = "https://ringwitdatwixtor.com/";
});
