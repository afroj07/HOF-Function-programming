function validateLinkedInProfileURL(url) {
    const linkedInProfilePattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (linkedInProfilePattern.test(url)) {
        console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
}

// Example usage:
validateLinkedInProfileURL("https://www.linkedin.com/in/afroj07");
validateLinkedInProfileURL("https://www.linkedin.com/in/afroj_mansoori006658");
validateLinkedInProfileURL("https://www.linkedin.com/in/invalid!user");
validateLinkedInProfileURL("http://www.linkedin.com/in/janedoe"); // Incorrect protocol