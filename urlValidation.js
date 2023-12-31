function validateURL(url) {
    const urlPattern = /^(https?:\/\/)[\w\d\-._~:/?#[\]@!$&'()*+,;=%]+(\.[\w]+)+$/;

    if (urlPattern.test(url)) {
        console.log(`"${url}" is a valid URL.`);
    } else {
        console.log(`"${url}" is not a valid URL.`);
    }
}

// Example usage:
validateURL("http://www.github.com");
validateURL("https://myprofile.example.org/path/to/page");
validateURL("ght/jth.org");
validateURL("https://www.linkedin.com");