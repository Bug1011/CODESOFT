//first section 
var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Python programmer.', 'Java developer.'],
    typeSpeed: 50,
});
// download resume
document.getElementById('downloadBtn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'resume.pdf';  // Path to  resume file
    link.download = 'resume.pdf';  // Name for the downloaded file
    link.click();
});
//github link
document.getElementById('githubBtn').addEventListener('click', function() {
    var githubUrl = 'https://github.com/Bug1011';  //my github url
    window.open(githubUrl, '_blank');
});