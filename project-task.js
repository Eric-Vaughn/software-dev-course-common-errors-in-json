/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

// const invalidBookingJSON = `
// {
//   "hotelName": "Grand City Hotel",
//   "checkInDate": "2024-05-15"
//   "checkOutDate": "2024-05-20",
//   "guests": [
//     {
//       name: "Alice Johnson",
//       "age": 30,
//       "email": "alice.johnson@example.com"
//     },
//     {
//       "name": "Bob Smith",
//       "age": undefined,
//       "email": "bob.smith@example"
//     }
//   ],
//   "roomDetails": {
//     "type": "Suite",
//     "pricePerNight": 200,
//     "amenities": ["WiFi", "Breakfast", "Parking",]
//   }
// }
// `;

// ============================================
// 🔍 FIXED JSON File without Errors
// ============================================

const bookingJSON =
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
;

// 🔧 Your Task:
// ✅1️⃣ Review the provided JSON file
// ✅2️⃣ Identify all syntax errors
/*          
            Should not be a template literal
            Missing comma after "checkInDate" entry
            First guest object in guests array's name key is not a string
            Guest "Bob Smith" cannot have an age value of undefined. It should be null instead
            Extra comma in the "amenities" array under "roomDetails"
*/
// ✅3️⃣ Write down what each error is and why it causes a problem
/*
            A template literal makes the entire JSON object a string. It must be an object. J.avaS.cript O.bject N.otation (JSON).
            Missing a comma confuses JSON on what is what. JSON is a strict language with a few, unbreakable rules.
            Every key in the JSON object must be a string. This is one of JSON's strict rules.
            Undefined is not a valid value in JSON. A value of null needs to be used instead.
            JSON is not lenient, so having an extra comma in an array confuses JSON and throws a syntax error.

*/
// ✅4️⃣ Correct the JSON structure so that it is valid
// ✅5️⃣ Validate your corrected version using a JSON linter or validator

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I used my brain (remembering what I learned from the lessons on JSON) to fix the errors.
I used https://jsonlint.com/ as a final check.

2️⃣ How did you confirm that your corrected JSON file was valid?

I used https://jsonlint.com/ as a final check.

3️⃣ Which errors were the most difficult to spot? Why?

A key not being a string. It looks nearly identical.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

Syntax highlighting, careful writing, and linting my work to check for any errors.

   */
