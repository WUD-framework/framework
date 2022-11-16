let toast = document.querySelector(".toast");
        let buttons = document.getElementById("buttons-div");

        buttons.addEventListener("click", e => {

            switch (e.target.textContent) {

                case "Success":
                    toast.className = "toast"
                    toast.classList.add("success");
                    break;

                case "Warning":
                    toast.className = "toast"
                    toast.classList.add("warning");
                    break;

                case "Danger":
                    toast.className = "toast"
                    toast.classList.add("danger");
                    break;

                case "Info":
                    toast.className = "toast"
                    toast.classList.add("info");
                    break;

                case "Label":
                    toast.classList.toggle("no-label");
                    break;

                case "Colored":
                    toast.classList.toggle("colored");
                    break;

                case "Border":
                    toast.classList.toggle("no-border");
                    break;

                case "Title":
                    toast.classList.toggle("no-title");
                    break;

                case "Summary":
                    toast.classList.toggle("no-summary");
                    break;

                case "Border-Radius":
                    toast.classList.toggle("no-border-radius");
                    break;
                default:
                    break;
            }
        });

        function closeAlert() {
            event.target.closest('.alert').remove();
        }

        function closeNoti() {
            event.target.closest('.noti').remove();
        }

        function closeToast() {
            event.target.closest('.toast').remove();
        }