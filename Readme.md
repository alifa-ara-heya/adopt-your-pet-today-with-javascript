### Project Name
**Peddy - Pet Adoption Platform**

### Short Description
**Peddy** is a responsive web application that allows users to explore and adopt pets from various categories. It provides detailed information about pets, including breed, gender, vaccination status, and price. Users can browse through different pet categories, view specific pet details, and engage with the platform by adopting their favorite pet.

### Key Features
1. **Pet Category Browsing**: Users can explore different categories of pets, each with unique details and images.
2. **Detailed Pet Information**: Upon selecting a pet, users are presented with detailed information, such as breed, birth-date, price, and more.
3. **Adoption Process**: Users can adopt a pet, triggering a celebratory modal with a live counter, adding an interactive experience.
4. **Real-time Pet Updates**: Fetches pet details dynamically from a public API, ensuring that the information stays current and up-to-date.
5. **Loading Spinner**: A smooth user experience is provided by displaying a loading spinner while pet details are being fetched.

### ES6 Features Used
1. **Arrow Functions**: For concise function expressions, e.g., `const displayCategories = (categories) => {...}`.
2. **Template Literals**: For embedding variables and expressions within HTML and strings, e.g., ``<p>${pet.price ? `${pet.price}$` : 'Not Fixed Yet'}</p>``.
3. **Async/Await**: For handling asynchronous operations like fetching data from APIs.
4. **Destructuring Assignment**: To extract data from objects, e.g., `const { breed, date_of_birth, price, image } = data.petData`.
5. **Default Parameters**: Functions can have default values for parameters.

### Live Link to the Deployed Project
https://assignment-6-alifa.surge.sh/