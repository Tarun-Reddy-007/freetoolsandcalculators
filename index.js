const toolsData = {
  "Health": [
    { name: "BMI Calculator", link: "./Health/Tools/BMICalculator.html", img: "Images/Health/bmi_calculator.jpg" },
    { name: "BMR Calculator", link: "./Health/Tools/BMRCalculator.html", img: "Images/Health/bmr_calculator.jpg" },
    { name: "Water Intake Calculator", link: "./Health/Tools/WaterIntakeCalculator.html", img: "Images/Health/water_intake_calculator.jpg" },
    { name: "Ideal Weight Calculator", link: "./Health/Tools/IdealWeightCalculator.html", img: "Images/Health/ideal_weight_calculator.jpg" },
    { name: "Heart Rate Zone Calculator", link: "./Health/Tools/HeartRateZoneCalculator.html", img: "Images/Health/heart_rate_zone_calculator.jpg" },
    { name: "Sleep Cycle Calculator", link: "./Health/Tools/SleepCycleCalculator.html", img: "Images/Health/sleep_cycle_calculator.png" },
    { name: "Body Fat % Calculator", link: "./Health/Tools/BodyFatPercentCalculator.html", img: "Images/Health/body_fat_percent_calculator.jpg" }
  ],
  "Fitness": [
    { name: "Protein Intake Calculator", link: "./Fitness/Tools/ProteinIntakeCalculator.html", img: "Images/Fitness/protein_intake_calculator.jpg" },
    { name: "Steps-to-Calorie Converter", link: "./Fitness/Tools/StepsToCalorieConverter.html", img: "Images/Fitness/steps_to_calorie_converter.jpg" }
  ],
  "Sports": [
    { name: "Running Pace Calculator", link: "./Sports/Tools/RunningPaceCalculator.html", img: "Images/Sports/running_pace_calculator.jpg" }
  ],
  "Clothing": [
    { name: "Clothes Size Converter", link: "./Clothing/Tools/ClothesSizeConverter.html", img: "Images/Clothing/clothes_size_converter.jpg" },
    { name: "Shoes Size Converter", link: "./Clothing/Tools/ShoesSizeConverter.html", img: "Images/Clothing/shoes_size_converter.jpg" },
    { name: "Dress Color Matcher", link: "./Clothing/Tools/DressColorMatcher.html", img: "Images/Clothing/color_palette_matcher.png"}
  ],
  "Finance": [
    { name: "Loan Affordability Calculator", link: "./Finance/Tools/LoanAffordabilityCalculator.html", img: "Images/Finance/loan_affordability_calculator.jpg" },
    { name: "Compound/Simple Interest Calculator", link: "./Finance/Tools/CompoundSimpleInterestCalculator.html", img: "Images/Finance/compound_simple_interest_calculator.jpg" },
    { name: "Loan EMI Calculator", link: "./Finance/Tools/LoanEMICalculator.html", img: "Images/Finance/loan_emi_calculator.jpg" },
    { name: "Car Loan EMI Calculator", link: "./Finance/Tools/CarLoanEMICalculator.html", img: "Images/Finance/car_loan_emi_calculator.jpg" },
    { name: "Personal Loan EMI Calculator", link: "./Finance/Tools/PersonalLoanEMICalculator.html", img: "Images/Finance/personal_loan_emi_calculator.png" },
    { name: "Home Loan Eligibility Calculator", link: "./Finance/Tools/HomeLoanEligibilityCalculator.html", img: "Images/Finance/home_loan_eligibility_calculator.jpg" }
  ],
  "Utilities": [
    { name: "Unit Converter", link: "./Utilities/Tools/UnitConverter.html", img: "Images/Utilities/unit_converter.png" },
    { name: "Age Calculator", link: "./Utilities/ToolsAgeCalculator.html", img: "Images/Utilities/age_calculator.jpg" },
    { name: "Date Difference Calculator", link: "./Utilities/Tools/DateDifferenceCalculator.html", img: "Images/Utilities/date_difference_calculator.png" },
    { name: "Word & Character Counter", link: "./Utilities/Tools/WordCharacterCounter.html", img: "Images/Utilities/word_character_counter.jpg" },
    { name: "QR Code Generator", link: "./Utilities/Tools/QRCodeGenerator.html", img: "Images/Utilities/qr_code_generator.jpg" },
    { name: "Roman Numeral Converter", link: "./Utilities/Tools/RomanNumeralConverter.html", img: "Images/Utilities/roman_numeral_converter.jpg" },
    { name: "Password Strength Checker", link: "./Utilities/Tools/PasswordStrengthChecker.html", img: "Images/Utilities/password_strength_checker.png" }
  ],
  "Education": [
    { name: "Digital Logic Converter", link: "./Education/Tools/DigitalLogicConverter.html", img: "Images/Education/digital_logic_generator.jpg" },
    { name: "ASCII Art Generator", link: "./Education/Tools/AsciiArtGenerator.html", img: "Images/Education/ascii_art_generator.jpg" },
    { name: "Truth Table Generator", link: "./Education/Tools/TruthTableGenerator.html", img: "Images/Education/truth_table_generator.jpg" }
  ],
  "Media": [
    // { name: "Wallpapers", link: "./Media/Tools/Wallpapers.html", img: "Images/Media/wallpapers.jpg" },
    { name: "Gradient Generator", link: "./Media/Tools/GradientGenerator.html", img: "Images/Media/gradient_generator.jpg" },
    { name: "Color Code Converter", link: "./Media/Tools/ColorCodeConverter.html", img: "Images/Media/color_code_converter.png" }
  ]
};

document.querySelectorAll(".card").forEach(card => {
  const category = card.dataset.category;
  const toolNameEl = card.querySelector(".tool-name");
  const toolLinkEl = card.querySelector(".tool-link");

  let index = 0;
  const tools = toolsData[category];

  function updateTool() {
    const tool = tools[index];
    toolNameEl.textContent = tool.name;
    toolLinkEl.href = tool.link;
    card.style.backgroundImage = `url('${tool.img}')`;
    index = (index + 1) % tools.length;
  }

  updateTool();
  setInterval(updateTool, 4000);
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
