
      AOS.init({
        duration: 900,
        once: false,
      });

      // Sidebar Toggle for Mobile
      const sidebar = document.getElementById("sidebar");
      const sidebarToggle = document.getElementById("sidebar-toggle");
      const mainContent = document.getElementById("main-content");
      const sidebarOverlay = document.getElementById("sidebar-overlay");

      sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
        sidebarOverlay.classList.toggle("hidden");
      });

      sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
        sidebarOverlay.classList.add("hidden");
      });

      // Hide sidebar and overlay on larger screens if it was toggled on mobile
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
          // md breakpoint
          sidebar.classList.remove("-translate-x-full");
          sidebarOverlay.classList.add("hidden");
        }
      });

      // Monthly Revenue Chart
      const monthlyRevenueCtx = document
        .getElementById("monthlyRevenueChart")
        .getContext("2d");
      const monthlyRevenueChart = new Chart(monthlyRevenueCtx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Revenue ($)",
              data: [3000, 3200, 4000, 3800, 4500, 5000, 5500],
              backgroundColor: "rgb(249, 115, 22)", // course-primary
              borderColor: "rgb(249, 115, 22)",
              borderWidth: 1,
              borderRadius: 8, // More rounded bars
              barPercentage: 0.7, // Reduce bar width
              categoryPercentage: 0.8, // Adjust space between categories
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: "#1F2937", // Dark background for tooltip
              titleColor: "#FFFFFF",
              bodyColor: "#FFFFFF",
              borderColor: "#f97316",
              borderWidth: 1,
              cornerRadius: 5,
              displayColors: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide x-axis grid lines
              },
              ticks: {
                color: "#6B7280", // Label color
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "#E5E7EB", // Light gray grid lines
              },
              ticks: {
                color: "#6B7280", // Label color
              },
            },
          },
        },
      });

      // Course Enrollment Breakdown Chart
      const courseBreakdownCtx = document
        .getElementById("courseBreakdownChart")
        .getContext("2d");
      const courseBreakdownChart = new Chart(courseBreakdownCtx, {
        type: "doughnut",
        data: {
          labels: [
            "Beginner Course",
            "Defensive Driving",
            "License Test Prep",
            "Advanced Driving",
            "Refresh Course",
          ], // Added more labels
          datasets: [
            {
              label: "Enrollments",
              data: [400, 250, 350, 150, 100], // Example data
              backgroundColor: [
                "rgb(249, 115, 22)", // course-primary
                "rgb(239, 68, 68)", // course-accent
                "rgb(59, 130, 246)", // blue-500
                "rgb(16, 185, 129)", // emerald-500
                "rgb(168, 85, 247)", // purple-500
              ],
              borderColor: "#FFFFFF", // White border for slices
              borderWidth: 2,
              hoverOffset: 8, // Slightly larger hover effect
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right", // Place legend on the right
              labels: {
                boxWidth: 12,
                padding: 15,
                color: "#4B5563", // Legend text color (gray-700)
              },
            },
            tooltip: {
              backgroundColor: "#1F2937",
              titleColor: "#FFFFFF",
              bodyColor: "#FFFFFF",
              borderColor: "#f97316",
              borderWidth: 1,
              cornerRadius: 5,
              displayColors: true, // Show color box in tooltip
            },
          },
        },
      });
    