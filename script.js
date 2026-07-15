async function connect() {

    const status = document.getElementById("status");

    try {

        status.innerHTML = "Getting latest server...";

        const response = await fetch("current.json?time=" + Date.now());

        if (!response.ok)
            throw new Error();

        const data = await response.json();

        status.innerHTML = "Redirecting to WAFA Print Portal...";

        setTimeout(() => {

            window.location.href = data.url;

        }, 1200);

    }

    catch {

        document.querySelector(".loader").style.display = "none";

        status.innerHTML = `
            <strong>Server is currently offline.</strong>
            <br><br>
            Please try again in a few minutes.
        `;

    }

}

connect();