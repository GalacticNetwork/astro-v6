$(document).ready(function() {
    // Toggle options when select-box is clicked
    $('.select-box').on('click', function(event) {
        event.stopPropagation();
        $(this).find('.options').toggle();
    });

    // Set selected option text and hide options
    $('#presetOptions').on('click', 'li', function(event) {
        event.stopPropagation();
        var selectedOption = $(this).text();
        $('#presets').text(selectedOption);
        $('.options').hide();
    });

    // Hide options if clicked outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.select-box').length) {
            $('.options').hide();
        }
    });

    // Custom and preset button event handlers
    const customApply = document.getElementById("customApply");
    const reset = document.getElementById("reset");
    const titleInput = document.getElementById("title");
    const faviconInput = document.getElementById("favicon");

    function applySettings(title, favicon) {
        localStorage.setItem("Title", title || "Astro");
        localStorage.setItem("Favicon", favicon || "/images/astro.png");
        location.reload();
    }

    // Check if customApply and reset buttons exist
    if (customApply) {
        customApply.addEventListener("click", () => {
            // Ensure titleInput and faviconInput exist
            if (titleInput && faviconInput) {
                const title = titleInput.value ? titleInput.value.trim() : "";
                const favicon = faviconInput.value ? faviconInput.value.trim() : "";
                applySettings(title, favicon);
            } else {
                console.error("Title or Favicon input element not found.");
            }
        });
    }

    if (reset) {
        reset.addEventListener("click", () => {
            applySettings();
        });
    }

    const presetButtons = {
        "google": { title: "Google", favicon: "https://raw.githubusercontent.com/GalacticNetwork/jordansmathwork-v5/main/assets/images/cloaks/gsearch.ico" },
        "googleClassroom": { title: "Home", favicon: "https://ssl.gstatic.com/classroom/favicon.png" },
        "bing": { title: "Bing", favicon: "https://bing.com/favicon.ico" },
        "nearpod": { title: "Nearpod", favicon: "https://nearpod.com/favicon.ico" },
        "powerschool": { title: "PowerSchool Sign In", favicon: "https://powerschool.com/favicon.ico" }
    };

    // Add event listeners for preset buttons
    for (const buttonId in presetButtons) {
        if (presetButtons.hasOwnProperty(buttonId)) {
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener("click", () => {
                    const { title, favicon } = presetButtons[buttonId];
                    applySettings(title, favicon);
                });
            }
        }
    }
});
