 // Display today's date
    const today = new Date();
    document.getElementById("todayDate").textContent = today.toDateString();

    function calculateGoodness() {
      const positives = document.querySelectorAll(".positive:checked").length;
      const negatives = document.querySelectorAll(".negative:checked").length;
      const score = (positives - negatives) / 10;
      const percentage = Math.max(0, Math.min(100, Math.round(score * 100)));

      let resultText = `Goodness Score: ${percentage}% - `;
      if (percentage === 100) {
        resultText += "Best Day! 🎉";
      } else if (percentage >= 50) {
        resultText += "Mid Day 😊";
      } else {
        resultText += "Worst Day 😞";
      }

      document.getElementById("goodnessResult").textContent = resultText;
    }