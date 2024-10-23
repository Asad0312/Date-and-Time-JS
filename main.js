function formatTime() {
            // Get time input from the user
            let timeInput = prompt("Enter the time in 24-hour format (e.g., 14:30 or 09:15):");
            if (!timeInput) {
                alert("Please enter a valid time.");
                return;
            }

            // Split the time into hours and minutes
            let [hours, minutes] = timeInput.split(":");
            hours = parseInt(hours);
            minutes = parseInt(minutes);

            // Validate the input time
            if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
                alert("Invalid time format! Please enter the time in HH:MM format.");
                return;
            }

            // Determine AM or PM and format the time into 12-hour format
            let period = "AM";
            if (hours >= 12) {
                period = "PM";
            }
            if (hours > 12) {
                hours -= 12;
            } else if (hours === 0) {
                hours = 12;  // Midnight case
            }

            // Determine the greeting based on the time
            let greeting = "";
            if (hours >= 5 && period === "AM") {
                greeting = "Good Morning!";
            } else if (hours >= 1 && period === "PM" && hours < 6) {
                greeting = "Good Afternoon!";
            } else if (hours >= 6 && period === "PM") {
                greeting = "Good Evening!";
            } else {
                greeting = "Good Night!";
            }

            // Display the formatted time and greeting in an alert
            let formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`;
            alert(`The time is: ${formattedTime}\n${greeting}`);
        }
