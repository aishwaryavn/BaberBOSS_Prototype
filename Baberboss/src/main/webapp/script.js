$(document).ready(function () {
    // Scroll to sections
    $('nav ul li a').on('click', function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 500);
        }
    });

    // Show/hide data storage section
    $('#data-storage-btn').on('click', function () {
        $('#data-storage').slideToggle();
    });

    // Open external links in new tabs
    $('a[href^="http"]:not([href*="' + window.location.host + '"]'), ('a[href*="//"]:not([href*="' + window.location.host + '"])').attr('target', '_blank');

    // Open email links in user's default email client
    $('a[href^="mailto:"]').on('click', function (event) {
        event.preventDefault();
        window.location.href = this.href;
    });

    // Open Jira, Teams, and Gmail links
    $('#jira-btn').on('click', function () {
        window.open('https://www.atlassian.com/software/jira', '_blank');
    });

    $('#teams-btn').on('click', function () {
        window.open('https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', '_blank');
    });

    $('#gmail-btn').on('click', function () {
        window.open('https://mail.google.com/', '_blank');
    });
});